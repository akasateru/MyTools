# ベースイメージの指定
FROM python:3.11

# 作業ディレクトリの設定
WORKDIR /app

# 依存パッケージのインストール
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# アプリケーションファイルのコピー
COPY . .

# Flaskアプリケーションの実行コマンドを変更
CMD ["gunicorn", "flask_app:app", "-b", "0.0.0.0:5000"]