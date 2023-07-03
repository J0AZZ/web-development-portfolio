# terraform init
#    setup terraform files, download provider image 
# terraform plan
#    shows the necessary changes to the infrastructure, to be approved enter a "yes"

# terraform apply
#    applies the required changes that are saved in main.tf

# terraform destroy
#    deletes all the resources specified in main.tf
provider "aws" {
    region = "us-east-1"
    access_key = ""
    secret_key = ""
}

# resource "<provider>_<resource_type>" "name" {
#     config options...
#     key = "value"
#     
#     tags = {
#        Key = "value"
#    }
# }

// at AWS Console the process of setting up a virtual machine is as follows:
//  Select AMI > Select Instance Type 
//  (optional) > Configure Instance > Add Storage > Add Tags > Configure Security Group
// after Review stage, wait for the instance to be launched
// terraform equivalent bellow:

// ec2 instance 
resource "aws_instance" "instance-1" {
    ami = ""
    instance_type = ""
}

// more resources being created and referenced

// virtual private cloud
resource "aws_vpc" "vpc-1" {
    cidr_block = "10.0.0.0/16"
}

// subnet
resource "aws_subnet" "subnet-1" {
    vpc_id = aws_vpc.vpc-1.id
    cidr_block = "10.0.0.0/24"
}