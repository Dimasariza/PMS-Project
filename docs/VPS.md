## Setup for VPS
Currently, this is for dev setup.

### Environment:

<style>
    .headerless th {
        display: none;
    }
</style>

<div class="headerless">

| | |
|---|---|
|Service    | DigitalOcean              |
| Image     | Ubuntu 22.10 x64          |
| Size      | 1 vCPU, 1GB / 10GB Disk   |
| Region    | Singapore (SGP1)          |

</div>

<br>

### Initial Setup
```bash
sudo apt update
sudo apt upgrade
sudo apt install git
```

### Install MySQL
1. Install MySQL
```bash
sudo apt install mysql-server -y
```

2. Make sure every user should login to MYSQL with a password
```bash
mysql -u root -p
show databases;
use mysql;
update user set plugin='mysql_native_password' where user='root';
flush privileges;
exit;
```

3. Setup secure installation
```bash
sudo mysql_secure_installation
```
And then just follow the step by mysql installation.

After setup for password, for the rest of questions, type "y" for YES


4. Test installation
```bash
sudo mysql -u root -p
```
And then type the password