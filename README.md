# lowb

![](https://img.shields.io/npm/v/lowb.svg?style=flat)
![](https://img.shields.io/badge/language-nodejs-orange.svg)
![](https://img.shields.io/badge/license-MIT-000000.svg)
[![](https://img.shields.io/badge/zhihu-@王爵nice-blue.svg)](https://www.zhihu.com/people/biezhi)

`lowb` 是一款使用NodeJs开发的命令行程序。

## 预览

[![asciicast](https://asciinema.org/a/132940.png)](https://asciinema.org/a/132940)

## 安装

**从npm下载安装**

```bash
npm install -g lowb
```

**源码安装**

```bash
git clone https://github.com/biezhi/lowb.git
cd lowb
sudo npm install . -g
```

## 使用

```bash
lowb --help

  Usage: lowb [options]

  Options:

    -V, --version    output the version number
    -i, --index <n>  ascii art index, default is random
    -t, --type <value>  quotes/jokes/tang/song
    -h, --help       output usage information
```

## 参数说明

- `-i`: `ascii` 图形索引，默认为随机，范围 **1 ~ 365**
- `-t`: 展示的类型，默认为名言，可选 **[ quotes | jokes | tang | song ]** ，分别为名言、段子、唐诗、宋词