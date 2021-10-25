const mbHelper = require('./mountebank-helper');
const settings = require('./settings.js');

function addService() {
    const response = {
        "timeline_url": "https://github.com/timeline",
        "user_url": "https://github.com/{user}",
        "security_advisories_url": "https://github.com/security-advisories",
        "_links": {
          "timeline": {
            "href": "https://github.com/timeline",
            "type": "application/atom+xml"
          },
          "user": {
            "href": "https://github.com/{user}",
            "type": "application/atom+xml"
          },
          "security_advisories": {
            "href": "https://github.com/security-advisories",
            "type": "application/atom+xml"
          }
        }
      }

    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/feeds/"
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(response)
                    }
                }
            ]
        }
    ];

    const imposter = {
        port: settings.github_feeds_port,
        protocol: 'http',
        stubs: stubs
    };

    return mbHelper.postImposter(imposter);
}

module.exports = { addService };