# Trabalho de conclusão de curso de AWS da escola da nuvem
**SITE CURRICULO:** 
https://d2p6dxry6y3u7t.cloudfront.net/index.html

<p align="center">
  <img src='https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' width="30%" />
  <img src='https://media.licdn.com/dms/image/C560BAQFgzildvCflaA/company-logo_200_200/0/1611076778595?e=1696464000&v=beta&t=sz5W-bMRhI_Gp-z-C30D0Vi7iXjo9ytzKV5apwaceG8' width="30%"/>
</p>

# Objetivo do trabalho
Nosso objetivo principal com esse projeto é desenvolver um website que contenha os currículos de nossa equipe, além de implantar um ou mais serviços da AWS (Amazon Web Services) para garantir uma rede de entrega de conteúdo com baixa latência, segurança e armazenamento durável.

# Tecnologias usadas
**Front-End:**
<img align="center" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" title="JavaScript">
<img align="center" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" title="HTML">
<img align="center" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" title="CSS">

**Serviços AWS:**
- Amazon S3
-  Amazon CloudFront

# Arquitetura
Quanto à arquitetura, optamos por uma abordagem simples. O usuário acessa nosso site pela internet, passa pelos domínios do AWS Cloud e é direcionado para nosso CloudFront, que, por sua vez, faz o roteamento direto para o nosso bucket do Amazon S3.
<p align="center">
  <img src='https://github.com/SAMUKISZHSD/AWS-TCC/blob/main/Arquitetura.jpeg' width="75%" />
</p>
  


