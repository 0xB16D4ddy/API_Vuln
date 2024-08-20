CREATE DATABASE IF NOT EXISTS vuln_nodejs_lab;

ALTER USER 'vuln_nodejs_user' @'%' IDENTIFIED
WITH
    caching_sha2_password BY 'passw0rd';