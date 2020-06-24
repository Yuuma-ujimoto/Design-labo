## Design Labo

HtmlとCSSでのWebデザインの練習用リポジトリ

目標毎日更新



## 基本構成

### htmlファイル

基本的に**index.html**で統一

複数ファイルが必要になってきた場合その都度別名のファイルを追加するか

ページ名のディレクトリを作成しそのディレクトリ直下に**index.html**を配置する

この方法を使うかは未定だが使う場合は**index.html**以外のファイルを配置しないこと



### cssファイル

基本的に**style.css**で統一

複数ファイルが必要になってきた場合すべてのファイルを**./css**ディレクトリに配置したうえで名前を分ける



### 画像ファイル

基本的に**./img**ディレクトリ直下に配置

長すぎるファイル名は避ける



### JavaScriptファイル

今のところ使う予定はないけど使うとしたら**./js**ディレクトリ直下に配置

ファイル名は用途に応じて分ける

今のところ特定のファイル名を統一はさせない



## 変数規則

CSS等のクラス名はxx-xx-xxというようにハイフンでつなぐ

アンダーバーやキャメルケース等は混同するとわかりにくくなるのでクラス名はすべてハイフン統一

