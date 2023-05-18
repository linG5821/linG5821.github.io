## 相关资源
* [中文使用手册](https://ivonblog.com/posts/stable-diffusion-webui-manuals/)

  教程写的还不错

* [Colab部署](https://github.com/camenduru/stable-diffusion-webui-colab)

  提供了各种SD-UI部署到 Colab 的现成的笔记。

  好用的 Colab 笔记推荐

  * https://colab.research.google.com/drive/1wEa-tS10h4LlDykd87TF5zzpXIIQoCmq

  * https://colab.research.google.com/github/ark5mith/stable-diffusion-webui-colab/blob/community/ark5mith/INSTALL_UPDATE_ConfigDrive_Colab_Kaggle.ipynb

    https://colab.research.google.com/github/ark5mith/stable-diffusion-webui-colab/blob/community/ark5mith/RUN_ConfigDrive_Colab_Kaggle.ipynb

  * https://colab.research.google.com/gist/Hareshkumar77/fdfdd058437baae5bbfd80cb62a0e338/web_based_ui_for_stable_diffusion_colab.ipynb

* [AI绘图资源合集](https://github.com/hua1995116/awesome-ai-painting)

  可以用于了解一些资源生态，也有一些使用教程

* [双语对照插件](https://github.com/journey-ad/sd-webui-bilingual-localization/blob/main/README_ZH.md)

  用于英文不好的小伙伴，但是语言包不在该插件内，具体参照文档，需要看到文档最后

## 模型

### 模型下载

* [HuggingFace](https://huggingface.co/models?other=stable-diffusion)

  中文俗称抱脸笑，可以说是人工智能界的Github。Stable Diffusion背后用到的很多AI工具，如Transformer、Tokenizers、Datasets都他们开发的，网站上也有丰富的教学文档。

  **下载方式**：进入保存库 → Files and versions，选择下载扩展名为`.ckpt`或`.safetensors`的模型。后者因不具备运行代码的能力因此较前者安全。至于`-pruned`代表模型有删减过大小

* [Civitai](https://civitai.com/)

  专门用来分享Stable Diffusion相关的资源，特色是模型都有示范缩略图，用户也可以分享彼此使用的提示词，以及分享作品。注意Civitai可能包含未成年不宜的图像。

  **下载方式**：进入模型页点击Download按钮下载模型

### 模型存放位置

不论是.ckpt还是.safetensors模型，都是在拷贝stable-diffusion-webui的保存库后，放到主程序文件夹下的`/models/Stable-diffusion`文件夹

### 模型分类

* **Checkpoint**

  Checkpoint 模型是真正意义上的Stable Diffusion模型，它们包含生成图像所需的一切，不需要额外的文件。但是它们体积很大，通常为 2G -7G。

  目前比较流行和常见的Checkpoint模型有：Anythingv3、Anythingv4.5、AbyssOrangeMix3、counterfeitV2.5、PastalMix、CamelliaMix_2.5D、chilloutMix_Ni_fix、F222、openjourney等。这些checkpoint模型是从Stable Diffusion基本模型训练而来的，相当于基于原生安卓系统进行的二次开发。

  Anything、Waifu、novelai、Counterfeit是二次元漫画模型，比较适合生成动漫游戏图片。

  chilloutmix 是真人模型，适合生成逼真的人像图片。

* **Textual lnversion（又叫Embedding）**

  Textual lnversion 是定义新关键字以生成新人物或图片风格的小文件。它们很小，通常为10-100 KB。必须将它们与checkpoint模型一起使用

* **LoRA** 

  LoRA 模型是用于修改图片风格的checkpoint模型的小补丁文件。它们通常为10-200 MB。必须与checkpoint模型一起使用

  真人美女LoRA模型：Korean Doll Likeness、Taiwan Doll Likenes、Cute Girl mix

  中国画风格：Shukezouma LoRA

  朋克风格：Cyberpunk 2077 Tarot card、Inkpunk Diffusion

  机器人风格：Robo Diffusion

  现代迪士尼风格：Mo-di-diffusion

* **Hypernetwork**

  Hypernetwork 是添加到checkpoint模型中的附加网络模块。它们通常为5-300 MB。必须与checkpoint模型一起使用。

* **Aesthetic Gradient**

  Aesthetic Gradient 是一个功能，它将准备好的图像数据的方向添加到“Embedding”中，将输入的提示词转换为矢量表示并定向图像生成。

* **LyCORIS**

  LyCORIS 可以让 LoRA 学习更多的层，可以当做是升级的LoRA

* **Controlnet**

  人物动作姿势模型

### 常用模型推荐

TODO
