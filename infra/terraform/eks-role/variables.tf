variable "region" {}

variable "account_id" {}

variable "tags" {
  type = map(any)

  default = {
    "created_by"  = "terraform"
    "application" = "previewapps"
    "tenant"      = "digitaleditions"
    "repo"        = "CondeNast/de-node-previewapps"
  }
}

variable "tenant_name" {
  default = "digitaleditions"
}

variable "tenant_prefix" {
  default = "nonprod"
}

variable "eks_cluster_name" {}

variable "eks_namespace" {
  default = "digitaleditions"
}

variable "helm_release_name" {
  default = "previewapps"
}
