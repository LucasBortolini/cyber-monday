---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Cyber Monday 2021 - Site OFICIAL | Ofertas e Promoções Exclusivas

sections:
  - banner
  - when
  - what
  - faq
  - blog

banner: assets/images/appliances.png

when:
  title: Quando é o
  image: assets/images/when.png
  paragraphs: 
    - Acontece na primeira segunda-feira após a Black Friday.
    - A Cyber Monday em 2021 acontecerá no dia 29 de novembro.

what:
  title: O que significa
  image: assets/images/what.png
  paragraphs:
    - A Cyber Monday é um evento de descontos exclusivamente online, ocorre na segunda-feira posterior ao Dia de Ação de Graças nos Estados Unidos. No Brasil os lojistas já estão aproveitando o evento para oferecer descontos durante toda a semana, na chamada Cyber Week. No Brasil, foi lançado, assim como a Black Friday, pelo portal Busca Descontos, Pertencente ao grupo Leadmedia.

faq:
  title: Tem alguma dúvida?
  questions: 
    - question: Que dia acontecerá a Cyber Monday no Brasil? 
      answer: A Cyber Monday no Brasil acontece sempre na segunda-feira posterior à Black Friday. Esse ano será no dia 29 de novembro.
    - question: Quem são os idealizadores do Cyber Monday no Brasil?
      answer: A Cyber Monday chegou oficialmente ao Brasil em 2012 e desde então cresce exponencialmente ano a ano. No Brasil, foi lançado, assim como a Black Friday, pelo portal Busca Descontos, pertencente ao grupo Leadmedia. 
    - question: O que é a Cyber Monday? 
      answer: A Cyber Monday é um evento que acontece exclusivamente online. Grandes varejistas utilizam a data para oferecer descontos em muitos de seus produtos.
        Por acontecer sempre na segunda-feira posterior à Black Friday, o evento passou a ser entendido como uma “extensão” da Black Friday.
        Muitos lojistas aproveitam o evento para oferecer descontos durante toda a semana, na chamada Cyber Week.
        No Brasil, foi lançado, assim como a Black Friday, pelo Portal Busca Descontos, pertencente ao grupo Leadmedia.
        Coloque a data no seu calendário e prepare-se para se juntar à milhões de outros consumidores em todo o mundo!
    - question: O que é o Busca Descontos?
      answer: Pioneiro em Cupons, Ofertas e Big Dates do Brasil, o Busca Descontos desde 2010 oferece para os e-consumidores de todo o país ofertas e cupons de descontos nos maiores e melhores lojistas. 
        Também promove as datas mais importantes do comércio eletrônico, como Black Friday, Cyber Monday, Brasil Game Day, Boxing Week, Mega Saldão e Dia do Frete Grátis.
    - question: Quais lojas estarão participando? As lojas físicas também participam?
      answer: Os maiores lojistas do Brasil participam! Em 2020 tivemos a participação, entre outras lojas de, Americanas, Fast Shop, Magazine Luiza, Submarino, HP, Meliuz, C6 Bank, entre muitos outros!
        O evento acontece exclusivamente online. Você aproveita ótimos descontos sem sair de casa!
    - question: Quais produtos terão desconto?
      answer: Não é possível confirmar quais produtos específicos estarão em promoção, isso porque também depende exclusivamente das lojas participantes. A lista de itens com desconto estará disponível no dia do evento, tanto no nosso site quanto no site dos lojistas.
    - question: Quais são as formas de pagamento?
      answer: Isso depende única e exclusivamente da loja que você comprar seu produto. Teremos várias lojas participantes e cada uma tem suas próprias formas de pagamento.
    - question: É possível receber ofertas com antecedência?
      answer: Sim! Para receber as melhores ofertas de nossos parceiros com antecedência basta cadastrar seu email agora mesmo na nossa home www.blackfriday.com.br.

---

{% for section in page.sections %}
  {% include {{ section }}.html %}
{% endfor %}