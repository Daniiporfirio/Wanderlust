## Git Flow

Em todo projeto real, é importantíssimo que se tenha controle total do que está sendo produzido por uma equipe de pessoas desenvolvedoras, onde, ao mesmo tempo, são feitas muitas coisas, como: implementação de novas funcionalidades, correção de falhas, lançamento de versões, etc. E é justamente aqui, que o Git Flow entra para nos ajudar, facilitando o desenvolvimento compartilhado de código com pessoas desenvolvedoras.

O Git Flow é um modelo, uma estratégia ou, ainda, um fluxo de trabalho muito utilizado por equipes de desenvolvimento de software. Ele se destaca por auxiliar na organização do versionamento de códigos.

Publicado em 2010, pelo engenheiro de software holandês, Vincent Driessen, o objetivo do Git Flow era melhorar as organizações das Branches (ramificações) dentro de repositórios e, desta forma, dar mais fluidez ao processo de desenvolvimento de novas funcionalidades, correções de bugs e lançamentos de versões.

O Git Flow trabalha com duas branches principais, a Develop e a Master, que duram para sempre; e três branches de suporte, Feature, Release e Hotfix, que são temporários e duram até realizar o merge com as branches principais.

Então, ao invés de uma única branch Master, esse fluxo de trabalho utiliza duas branches principais para registrar o histórico do projeto. A branch Master armazena o histórico do lançamento oficial, e a branch Develop serve como uma ramificação de integração para recursos.

É ideal que todos os commits na branch Master sejam marcados com um número de versão. Na imagem abaixo, vemos como é a estrutura do fluxo do Git Flow:

![image](https://user-images.githubusercontent.com/78025874/194176490-544bc26a-f184-4d0f-b9d0-603b0ceadffd.png)

Branchs:
- Master/Main -> Principal branch, aqui é onde temos todo o código de produção. Todas as novas funcionalidades que estão sendo desenvolvidas, em algum momento, serão mescladas ou associadas a Master. As formas de interagir com essa branch são através de uma Hotfix ou de uma nova Release.
- Develop -> É a branch onde fica o código do próximo deploy. Ela serve como uma linha do tempo com os últimos desenvolvimentos, isso significa que ela possui funcionalidades que ainda não foram publicadas e que posteriormente vão ser associadas com a branch Master.
- Feature -> São branches utilizadas para o desenvolvimento de funcionalidades específicas. É recomendável que essas branches sigam uma convenção de nome, a convenção mais utilizada é iniciar o nome das branches com feature, por exemplo, “feature/alura-forum”. É importante saber que essas features branches são criadas sempre a partir da branch Develop. Portanto, quando finalizada, elas são removidas após realizar o merge com a Branch Develop. Se tivermos dez funcionalidades a serem desenvolvidas, criaremos dez branches independentes.
- Hotfix -> É uma branch criada a partir da master para realizar correções imediatas encontradas no sistema em produção. Quando concluída, ela é excluída após realizar o merge com as branches Master e Develop. Além disso, quando fechamos um Hotfix Branch, temos que criar uma tag com a nova versão do projeto. Isso porque cada mudança que fazemos na Branch Master precisa de uma tag que a represente.
- Release -> Uma vez que uma etapa de desenvolvimento esteja concluída, teremos em nossa Branch Develop todas as features e Hotfix mesclados. Então, se quisermos ter todas essas novas funcionalidades na Branch Master, teremos que criar uma Branch de Release. A Branch Release serve como ponte para fazer o merge da Develop para a Master. Ela funciona como ambiente de homologação e é removida após realizar os testes do merge com a Master. Caso seja encontrado algum bug e haja alguma alteração, ela também deve ser sincronizada com a Develop. Por fim, quando fechamos uma Branch Release, temos que criar uma tag com a nova versão de lançamento do software, para que possamos ter um histórico completo do desenvolvimento.


## Vantagens:
- Desenvolvimento Paralelo Simples
- Colaboração
- Possui uma área de preparação (branch develop)
- Suporte para correções de emergencia (branch hotfix)

# Resumo

## GitFlow

Modelo de organização de branches para um bom desenvolvimento do projeto

## Branches 
### Master/Main
Principal branch. Recebe , em algum momento, as novas funcionalidades que estão sendo desenvolvidas.

### Develop
Branch onde fica o código do próximo deploy, ou seja , contém funcionalidades que não estão na master mas serão posteriormente adicionadas

### Feature
São branches utilizadas para o desenvolvimento de funcionalidades específicas. São criadas a partir da branch Develop. Deve ser criado uma branch para cada nova feature a ser trabalhda , com um nome que a identifique.

### Hotfix
Utilizada para correções imediatas

Exemplo : mudar a border em um arquivo css de 34px para 35px

Ela comita tanto na  branch Master quanto na branch Develop



## Referência

 - [Alura]([https://www.alura.com.br/artigos/git-flow-o-que-e-como-quando-utilizar?gclid=Cj0KCQjw1vSZBhDuARIsAKZlijRfj6d5_SPd0EUBwe7CIvI9sd8WC4KXaNW-zF-vMD2MWkiKI6QH8tMaAsRTEALw_wcB])
