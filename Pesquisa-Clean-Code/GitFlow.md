## Git Flow

Em todo projeto real, é importantíssimo que se tenha controle total do que está sendo produzido por uma equipe de pessoas desenvolvedoras, onde, ao mesmo tempo, são feitas muitas coisas, como: implementação de novas funcionalidades, correção de falhas, lançamento de versões, etc. E é justamente aqui, que o Git Flow entra para nos ajudar, facilitando o desenvolvimento compartilhado de código com pessoas desenvolvedoras.

O Git Flow é um modelo, uma estratégia ou, ainda, um fluxo de trabalho muito utilizado por equipes de desenvolvimento de software. Ele se destaca por auxiliar na organização do versionamento de códigos.

Publicado em 2010, pelo engenheiro de software holandês, Vincent Driessen, o objetivo do Git Flow era melhorar as organizações das Branches (ramificações) dentro de repositórios e, desta forma, dar mais fluidez ao processo de desenvolvimento de novas funcionalidades, correções de bugs e lançamentos de versões.

O Git Flow trabalha com duas branches principais, a Develop e a Master, que duram para sempre; e três branches de suporte, Feature, Release e Hotfix, que são temporários e duram até realizar o merge com as branches principais.

Então, ao invés de uma única branch Master, esse fluxo de trabalho utiliza duas branches principais para registrar o histórico do projeto. A branch Master armazena o histórico do lançamento oficial, e a branch Develop serve como uma ramificação de integração para recursos.

É ideal que todos os commits na branch Master sejam marcados com um número de versão. Na imagem abaixo, vemos como é a estrutura do fluxo do Git Flow:

![image](https://user-images.githubusercontent.com/78025874/194176490-544bc26a-f184-4d0f-b9d0-603b0ceadffd.png)


