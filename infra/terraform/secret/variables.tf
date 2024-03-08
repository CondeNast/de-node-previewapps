variable "region" {
  type = string
}

variable "account_id" {
  type = string
}

variable "tags" {
  type = map(any)

  default = {
    "created_by"  = "terraform"
    "application" = "previewapps"
    "tenant"      = "digitaleditions"
    "repo"        = "CondeNast/de-node-previewapps"
  }
}

variable "tenant_prefix" {
  type    = string
  default = "nonprod"
}

variable "name" {
  type    = string
  default = "previewapps"
}

variable "replica_regions" {
  type = list(string)
}
