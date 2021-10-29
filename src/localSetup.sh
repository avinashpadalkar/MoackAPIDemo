
#starting the localstack server
osascript -e 'tell application "Terminal" to activate' \
  -e 'tell application "Terminal" to do script "localstack start" in selected tab of the front window'

sleep 20

#create the table
awslocal dynamodb create-table --table-name partners-service.users --attribute-definitions AttributeName=api_key,AttributeType=S --key-schema AttributeName=api_key,KeyType=HASH --provisioned-throughput ReadCapacityUnits=10,WriteCapacityUnits=5 --endpoint-url http://localhost:4566 --region=us-east-1

awslocal dynamodb create-table --table-name partners-service.cache --attribute-definitions AttributeName=cache_key,AttributeType=S --key-schema AttributeName=cache_key,KeyType=HASH --provisioned-throughput ReadCapacityUnits=10,WriteCapacityUnits=5 --endpoint-url http://localhost:4566 --region=us-east-1

#put the record
awslocal dynamodb put-item --table-name partners-service.users --item '{
        "api_key" : {"S" : "qwertyuiop"},
        "facilities": {"L": [{"N": "1"}, {"N": "2"}]},
        "name": {"S" : "test"}
        }' --return-consumed-capacity TOTAL --endpoint-url http://localhost:4566 --region=us-east-1

awslocal dynamodb put-item --table-name partners-service.cache --item '{
	"cache_key" : {"S" : "token"},
	"value": {"S": "eyJraWQiOiJVGdVdKQXBFTzE5NzlPT"},
	"expiry": {"S" : "2021-03-27T18:55:38.933864Z"}
	}' --return-consumed-capacity TOTAL --endpoint-url http://localhost:4566 --region=us-east-1