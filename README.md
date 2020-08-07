# :snowflake::snowflake::snowflake: Node Glacier :snowflake::snowflake::snowflake:

Personal project to learn how to use Amazon S3 Glacier with an NodeJS Application

Build with ExpressJS and AWS SDK for JavaScript

## Use the project

Clone or Fork this repository

```sh
cd app
npm install
```

With all the dependencies installed, you must create a .env file with:

- AWS_ACCESS_KEY_ID
- AWS_SECRET_KEY
- AWS_DEFAULT_REGION
- AWS_GLACIER_API_VERSION

That will contain the AWS Programmatic Access and Region that you'll create your glacier vault to keep your files and to define the API Version of the SDK.

## Designer

This app is build to create, list and delete an vault and to upload and select data from a file from the vault

### Routes

| method   | route                            |
|:---------|:---------------------------------|
| [GET]    | /vault                           |
| [GET]    | /vault/{vaultName}               |
| [POST]   | /vault/{vaultName}               |
| [DELETE] | /vault/{vaultName}               | 
| [POST]   | /archive/{vaultName}/upload      |
| [POST]   | /archive/{vaultName}/{archiveId} | 