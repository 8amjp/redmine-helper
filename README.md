redmine-helper
==============

[Redmine](https://www.redmine.org/) 、特に[Bitnami Redmine](https://bitnami.com/stack/redmine) の運用を手助けします。

## SetUp

* `.env.sample` を `.env` にリネームし、コマンドを環境に合わせて記述してください。
* `cron/crontab.js` を編集して、スケジュールを設定してください。
* そして `npm install` 。

なお、[pm2](https://www.npmjs.com/package/pm2) を使用し、root権限での実行を推奨します。

```
sudo npm install pm2 -g
sudo pm2 startup
sudo pm2 start redmine-helper/bin/www --name=redmine-helper
sudo pm2 save
```

## Usage

`jobs` ディレクトリ内のスクリプトを任意の時刻に実行できます。

### mysqldump-redmine

`mysqldump` コマンドを発行し、データベースをバックアップします。

### redmine-email-receive

`redmine:email:receive_imap` コマンドを実行し、電子メールを受信します。

### shutdown-r-now

`shutdown -r now` コマンドを実行し、Linuxマシンを再起動します。
