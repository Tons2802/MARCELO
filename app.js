const BASE = 'https://www.9gplastic.com/login/arquivos/';
const PRODUCTS = [
  { id:1, name:'Taça Champanhe 180 ml', cat:'tacas', caixa:'Caixa c/ 100 un.', desc:'Taça de 180ml para champanhe e drinks. Disponível em diversas cores.',
    cores:[
      {nome:'VERMELHO', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/62587e8fd73b2.png'},
      {nome:'AMARELO', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/62587ebc1a05b.png'},
      {nome:'LARANJA', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/6258845421940.png'},
      {nome:'ROXO', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/6258845426eb6.png'},
      {nome:'PINK', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/625884542e5b4.png'},
      {nome:'LILÁS', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/62588454334b1.png'},
      {nome:'ROSA BEBÊ', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/625884543808f.png'},
      {nome:'AZUL', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/625884543d10b.png'},
      {nome:'TIFFANY', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/625884544856b.png'},
      {nome:'VERDE LIMÃO', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/6258845459ae7.png'},
      {nome:'FUMÊ', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/6258845450e01.png'},
      {nome:'CRISTAL', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/62588454547f3.png'},
      {nome:'PRETO', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Translucido/625884545f0c8.png'},
      {nome:'BRANCO', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Leitoso/625884aa4e26a.png'},
      {nome:'DOURADO', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Leitoso/625884aa9fac6.png'},
      {nome:'PRATA', img:BASE+'TA%C3%87A%20CHAMPANHE%20180%20ML/Leitoso/625884aa9a429.png'},
    ]},
  { id:2, name:'Taça Gin 650 ml – Sem Borda', cat:'tacas', caixa:'Caixa c/ 24 un.', desc:'Taça gin 650ml sem borda. Perfeita para drinks sofisticados.',
    cores:[
      {nome:'VERMELHO', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867bc43bb.png'},
      {nome:'AMARELO', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867bd0b57.png'},
      {nome:'LARANJA', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867bd6de5.png'},
      {nome:'ROXO', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867bdca33.png'},
      {nome:'PINK', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867be2512.png'},
      {nome:'LILÁS', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867be7ca5.png'},
      {nome:'ROSA BEBÊ', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867bed26c.png'},
      {nome:'AZUL', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867bf2b93.png'},
      {nome:'AZUL BEBÊ', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867bf8253.png'},
      {nome:'TIFFANY', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867bfd8fb.png'},
      {nome:'FUMÊ', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867c031eb.png'},
      {nome:'CRISTAL', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867c089ad.png'},
      {nome:'VERDE LIMÃO', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867c0e14d.png'},
      {nome:'PRETO', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Translucido/6258867c1387c.png'},
      {nome:'BRANCO', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Leitoso/6258868d85e81.png'},
      {nome:'DOURADO', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20S%20BORDA/Leitoso/6258868dd7a0e.png'},
    ]},
  { id:3, name:'Taça Gin 650 ml – Com Borda', cat:'tacas', caixa:'Caixa c/ 24 un.', desc:'Taça gin 650ml com borda decorada. Visual diferenciado para eventos.',
    cores:[
      {nome:'VERMELHO', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/625887059c33f.png'},
      {nome:'LARANJA', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/62588705a7d63.png'},
      {nome:'ROXO', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/62588705ad3d5.png'},
      {nome:'PINK', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/62588705b2a4f.png'},
      {nome:'LILÁS', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/62588705b8207.png'},
      {nome:'ROSA BEBÊ', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/62588705bdb3e.png'},
      {nome:'AZUL', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/62588705c3364.png'},
      {nome:'AZUL BEBÊ', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/62588705c8db4.png'},
      {nome:'TIFFANY', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/62588705ce4a1.png'},
      {nome:'FUMÊ', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/62588705d3b44.png'},
      {nome:'CRISTAL', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/62588705d9255.png'},
      {nome:'VERDE LIMÃO', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/62588705dea81.png'},
      {nome:'PRETO', img:BASE+'TA%C3%87A%20GIN%20650%20ML%20-%20C%20BORDA/Translucido/62588705e45e9.png'},
    ]},
  { id:4, name:'Taça Gin 650 ml – Degradê', cat:'tacas', caixa:'Caixa c/ 24 un.', desc:'Taça gin 650ml em acabamento degradê exclusivo.',
    cores:[
      {nome:'AZUL/ROSA', img:BASE+'TA%C3%87A%20GIN%20DEGRADE/62589a8c4a9e0.png'},
      {nome:'VERDE/AMARELO', img:BASE+'TA%C3%87A%20GIN%20DEGRADE/62589a8c502e9.png'},
      {nome:'ROSA/LILÁS', img:BASE+'TA%C3%87A%20GIN%20DEGRADE/62589a8c55b41.png'},
    ]},
  { id:5, name:'Copo Twister 500 ml', cat:'copos', caixa:'Caixa c/ 200 un.', desc:'Copo twister 500ml. Acompanha tampa e canudo.',
    cores:[
      {nome:'VERMELHO', img:BASE+'d253c5/Translucido/62599c9595442.png'},
      {nome:'LARANJA', img:BASE+'d253c5/Translucido/62599dafd906e.png'},
      {nome:'AMARELO', img:BASE+'d253c5/Translucido/62599dafdedc1.png'},
      {nome:'VERDE LIMÃO', img:BASE+'d253c5/Translucido/62599dafe4561.png'},
      {nome:'ROXO', img:BASE+'d253c5/Translucido/62599dafedf9d.png'},
      {nome:'LILÁS', img:BASE+'d253c5/Translucido/62599daff2dfc.png'},
      {nome:'PINK', img:BASE+'d253c5/Translucido/62599db0040f8.png'},
      {nome:'ROSA BEBÊ', img:BASE+'d253c5/Translucido/62599db0097e9.png'},
      {nome:'AZUL', img:BASE+'d253c5/Translucido/62599db010b5e.png'},
      {nome:'AZUL BEBÊ', img:BASE+'d253c5/Translucido/62599db015b70.png'},
      {nome:'TIFFANY', img:BASE+'d253c5/Translucido/62599db01c8be.png'},
      {nome:'FUMÊ', img:BASE+'d253c5/Translucido/62599db021571.png'},
      {nome:'CRISTAL', img:BASE+'d253c5/Translucido/62599db025dfc.png'},
    ]},
  { id:6, name:'Copo Long Drink 360 ml – Com Tampa', cat:'copos', caixa:'Caixa c/ 100 un.', desc:'Copo long drink 360ml com tampa.',
    cores:[
      {nome:'VERMELHO', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20C%20TAMPA/Translucido/625889c9c7b0d.png'},
      {nome:'AMARELO', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20C%20TAMPA/Translucido/625889c9cc9b6.png'},
      {nome:'LARANJA', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20C%20TAMPA/Translucido/625889c9d218f.png'},
      {nome:'ROXO', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20C%20TAMPA/Translucido/625889c9d7938.png'},
      {nome:'PINK', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20C%20TAMPA/Translucido/625889c9dd11f.png'},
      {nome:'LILÁS', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20C%20TAMPA/Translucido/625889c9e2925.png'},
      {nome:'ROSA BEBÊ', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20C%20TAMPA/Translucido/625889c9e810a.png'},
      {nome:'AZUL', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20C%20TAMPA/Translucido/625889c9ed90a.png'},
      {nome:'TIFFANY', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20C%20TAMPA/Translucido/625889c9f8971.png'},
      {nome:'FUMÊ', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20C%20TAMPA/Translucido/625889c9fe22e.png'},
      {nome:'CRISTAL', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20C%20TAMPA/Translucido/625889ca03a6f.png'},
      {nome:'VERDE LIMÃO', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20C%20TAMPA/Translucido/625889ca09294.png'},
    ]},
  { id:7, name:'Copo Long Drink 360 ml – Sem Tampa', cat:'copos', caixa:'Caixa c/ 100 un.', desc:'Copo long drink 360ml clássico sem tampa.',
    cores:[
      {nome:'VERMELHO', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20S%20TAMPA/Translucido/625889c9c7b0d.png'},
      {nome:'CRISTAL', img:BASE+'COPO%20LONG%20DRINK%20360%20ML%20-%20S%20TAMPA/Translucido/625889ca03a6f.png'},
    ]},
  { id:8, name:'Copo Shake 500 ml', cat:'copos', caixa:'Caixa c/ 50 un.', desc:'Copo shake 500ml. Ideal para milk-shakes e vitaminas.',
    cores:[
      {nome:'VERMELHO', img:BASE+'COPO%20SHAKE%20500%20ML/Translucido/62588bc69a1c2.png'},
      {nome:'AMARELO', img:BASE+'COPO%20SHAKE%20500%20ML/Translucido/62588bc69f880.png'},
      {nome:'LARANJA', img:BASE+'COPO%20SHAKE%20500%20ML/Translucido/62588bc6a5104.png'},
      {nome:'ROXO', img:BASE+'COPO%20SHAKE%20500%20ML/Translucido/62588bc6aa8a2.png'},
      {nome:'PINK', img:BASE+'COPO%20SHAKE%20500%20ML/Translucido/62588bc6b003b.png'},
      {nome:'LILÁS', img:BASE+'COPO%20SHAKE%20500%20ML/Translucido/62588bc6b5b37.png'},
      {nome:'ROSA BEBÊ', img:BASE+'COPO%20SHAKE%20500%20ML/Translucido/62588bc6bb348.png'},
      {nome:'AZUL', img:BASE+'COPO%20SHAKE%20500%20ML/Translucido/62588bc6c0bba.png'},
      {nome:'TIFFANY', img:BASE+'COPO%20SHAKE%20500%20ML/Translucido/62588bc6cbbd0.png'},
      {nome:'FUMÊ', img:BASE+'COPO%20SHAKE%20500%20ML/Translucido/62588bc6d143a.png'},
      {nome:'CRISTAL', img:BASE+'COPO%20SHAKE%20500%20ML/Translucido/62588bc6d6c52.png'},
      {nome:'VERDE LIMÃO', img:BASE+'COPO%20SHAKE%20500%20ML/Translucido/62588bc6dc499.png'},
    ]},
  { id:9, name:'Copo Caldereta 500 ml – Sem Tampa', cat:'copos', caixa:'Caixa c/ 50 un.', desc:'Copo caldereta liso 500ml sem tampa.',
    cores:[
      {nome:'VERMELHO', img:BASE+'COPO%20CALDERETA%20S%20TAMPA%20LISO%20-%20500ML/Translucido/625892e4c72f8.png'},
      {nome:'AMARELO', img:BASE+'COPO%20CALDERETA%20S%20TAMPA%20LISO%20-%20500ML/Translucido/625892e4cc935.png'},
      {nome:'LARANJA', img:BASE+'COPO%20CALDERETA%20S%20TAMPA%20LISO%20-%20500ML/Translucido/625892e4d21c0.png'},
      {nome:'ROXO', img:BASE+'COPO%20CALDERETA%20S%20TAMPA%20LISO%20-%20500ML/Translucido/625892e4d7ba8.png'},
      {nome:'PINK', img:BASE+'COPO%20CALDERETA%20S%20TAMPA%20LISO%20-%20500ML/Translucido/625892e4dd373.png'},
      {nome:'AZUL', img:BASE+'COPO%20CALDERETA%20S%20TAMPA%20LISO%20-%20500ML/Translucido/625892e4edd93.png'},
      {nome:'TIFFANY', img:BASE+'COPO%20CALDERETA%20S%20TAMPA%20LISO%20-%20500ML/Translucido/625892e4f8e75.png'},
      {nome:'CRISTAL', img:BASE+'COPO%20CALDERETA%20S%20TAMPA%20LISO%20-%20500ML/Translucido/625892e503efc.png'},
      {nome:'VERDE LIMÃO', img:BASE+'COPO%20CALDERETA%20S%20TAMPA%20LISO%20-%20500ML/Translucido/625892e5097a3.png'},
    ]},
  { id:10, name:'Copo Whisk 360 ml', cat:'copos', caixa:'Caixa c/ 100 un.', desc:'Copo whisky 360ml com design clássico.',
    cores:[
      {nome:'VERMELHO', img:BASE+'COPO%20WHISK%20360%20ML/Translucido/625893e765c54.png'},
      {nome:'AMARELO', img:BASE+'COPO%20WHISK%20360%20ML/Translucido/625893e76b71c.png'},
      {nome:'LARANJA', img:BASE+'COPO%20WHISK%20360%20ML/Translucido/625893e770dc1.png'},
      {nome:'ROXO', img:BASE+'COPO%20WHISK%20360%20ML/Translucido/625893e77652d.png'},
      {nome:'PINK', img:BASE+'COPO%20WHISK%20360%20ML/Translucido/625893e77bc5b.png'},
      {nome:'AZUL', img:BASE+'COPO%20WHISK%20360%20ML/Translucido/625893e78c3e9.png'},
      {nome:'TIFFANY', img:BASE+'COPO%20WHISK%20360%20ML/Translucido/625893e7974c9.png'},
      {nome:'FUMÊ', img:BASE+'COPO%20WHISK%20360%20ML/Translucido/625893e79cc52.png'},
      {nome:'CRISTAL', img:BASE+'COPO%20WHISK%20360%20ML/Translucido/625893e7a2543.png'},
      {nome:'VERDE LIMÃO', img:BASE+'COPO%20WHISK%20360%20ML/Translucido/625893e7a7d5c.png'},
    ]},
  { id:11, name:'Bandeja Quadrada', cat:'bandejas', caixa:'Caixa c/ 10 un.', desc:'Bandeja quadrada resistente para servir doces e salgados.',
    cores:[
      {nome:'TRANSPARENTE', img:BASE+'BANDEJA%20QUADRADA/6258983718f04.png'},
      {nome:'PRETA', img:BASE+'BANDEJA%20QUADRADA/625898371e5a8.png'},
    ]},
  { id:12, name:'Bandeja Oval', cat:'bandejas', caixa:'Caixa c/ 10 un.', desc:'Bandeja oval elegante para apresentação de alimentos.',
    cores:[
      {nome:'TRANSPARENTE', img:BASE+'BANDEJA%20OVAL/6258987d80c89.png'},
      {nome:'PRETA', img:BASE+'BANDEJA%20OVAL/6258987d864cf.png'},
    ]},
  { id:13, name:'Bandeja Retangular', cat:'bandejas', caixa:'Caixa c/ 10 un.', desc:'Bandeja retangular para mesas de buffet e eventos.',
    cores:[
      {nome:'TRANSPARENTE', img:BASE+'BANDEJA%20RETANGULAR/625898c2e30c2.png'},
      {nome:'PRETA', img:BASE+'BANDEJA%20RETANGULAR/625898c2e8941.png'},
    ]},
  { id:14, name:'Boleira Translúcida', cat:'boleiras', caixa:'Caixa c/ 20 un.', desc:'Boleira PS cristal reajustável. Perfeita para bolos e tortas.',
    cores:[
      {nome:'CRISTAL', img:BASE+'BOLEIRA%20TRANSLUCIDA/625899e3cb9af.png'},
      {nome:'FUMÊ', img:BASE+'BOLEIRA%20TRANSLUCIDA/625899e3d1483.png'},
      {nome:'ROSA', img:BASE+'BOLEIRA%20TRANSLUCIDA/625899e3d6fcf.png'},
    ]},
  { id:15, name:'Boleira Leitosa', cat:'boleiras', caixa:'Caixa c/ 20 un.', desc:'Boleira PS cristal leitosa reajustável.',
    cores:[
      {nome:'BRANCA', img:BASE+'BOLEIRA%20LEITOSA/62589a2bdf78f.png'},
      {nome:'PRETA', img:BASE+'BOLEIRA%20LEITOSA/62589a2be4f98.png'},
    ]},
  { id:16, name:'Vaso para Suculentas Premier', cat:'decoracao', caixa:'Caixa c/ 100 un.', desc:'Vaso premier para suculentas e plantas pequenas.',
    cores:[
      {nome:'VERDE OLIVA', img:BASE+'Vasos%20para%20Sucolentas%20Premier/62588e9cd3af2.png'},
      {nome:'BRANCO', img:BASE+'Vasos%20para%20Sucolentas%20Premier/62588e9cd92ab.png'},
      {nome:'PRETO', img:BASE+'Vasos%20para%20Sucolentas%20Premier/62588e9cdecd1.png'},
      {nome:'TERRACOTA', img:BASE+'Vasos%20para%20Sucolentas%20Premier/62588e9ce4e20.png'},
    ]},
  { id:17, name:'Mini Baú', cat:'decoracao', caixa:'Caixa c/ 50 un.', desc:'Mini baú decorativo para lembrancinhas e mesas de festa.',
    cores:[
      {nome:'BRANCO', img:BASE+'MINI%20BAU/6258952266de9.png'},
      {nome:'PRETO', img:BASE+'MINI%20BAU/625895226c35e.png'},
      {nome:'VERMELHO', img:BASE+'MINI%20BAU/6258952271b69.png'},
      {nome:'ROSA', img:BASE+'MINI%20BAU/6258952277378.png'},
      {nome:'AZUL BEBÊ', img:BASE+'MINI%20BAU/625895227ca2e.png'},
    ]},
  { id:18, name:'Mini Maçã', cat:'decoracao', caixa:'Caixa c/ 50 un.', desc:'Mini maçã decorativa para festas temáticas.',
    cores:[
      {nome:'VERMELHO', img:BASE+'MINI%20MACA/6258960f1f82f.png'},
      {nome:'VERDE', img:BASE+'MINI%20MACA/6258960f24f11.png'},
      {nome:'AMARELO', img:BASE+'MINI%20MACA/6258960f2a6c2.png'},
    ]},
  { id:19, name:'Mini Carro', cat:'decoracao', caixa:'Caixa c/ 50 un.', desc:'Mini carro decorativo para festa infantil.',
    cores:[
      {nome:'VERMELHO', img:BASE+'MINI%20CARRO/62589678b5085.png'},
      {nome:'AZUL', img:BASE+'MINI%20CARRO/62589678ba704.png'},
      {nome:'AMARELO', img:BASE+'MINI%20CARRO/62589678bff56.png'},
      {nome:'ROSA', img:BASE+'MINI%20CARRO/62589678c5748.png'},
    ]},
  { id:20, name:'Mini Ursinho', cat:'decoracao', caixa:'Caixa c/ 50 un.', desc:'Mini ursinho decorativo para chá de bebê e festas infantis.',
    cores:[
      {nome:'MARROM', img:BASE+'MINI%20URSINHO/625896c2c8d12.png'},
      {nome:'BEGE', img:BASE+'MINI%20URSINHO/625896c2ce4c1.png'},
      {nome:'BRANCO', img:BASE+'MINI%20URSINHO/625896c2d3c5d.png'},
    ]},
  { id:21, name:'Coroa', cat:'decoracao', caixa:'Caixa c/ 50 un.', desc:'Coroa decorativa para aniversários e debutantes.',
    cores:[
      {nome:'DOURADO', img:BASE+'COROA/625897215e5b3.png'},
      {nome:'PRATA', img:BASE+'COROA/6258972163e0c.png'},
      {nome:'ROSA', img:BASE+'COROA/6258972169614.png'},
    ]},
  { id:22, name:'Coração Grande', cat:'decoracao', caixa:'Caixa c/ 50 un.', desc:'Coração grande decorativo para festas e eventos.',
    cores:[
      {nome:'TRANSPARENTE', img:BASE+'CORACAO%20GRANDE/6258979b1dcd4.png'},
      {nome:'VERMELHO', img:BASE+'CORACAO%20GRANDE/6258979b234a1.png'},
      {nome:'ROSA', img:BASE+'CORACAO%20GRANDE/6258979b28c1b.png'},
    ]},
  { id:23, name:'Coração Pequeno', cat:'decoracao', caixa:'Caixa c/ 100 un.', desc:'Coração pequeno decorativo para lembrancinhas.',
    cores:[
      {nome:'TRANSPARENTE', img:BASE+'CORACAO%20PEQUENO/625897ce5d26f.png'},
      {nome:'VERMELHO', img:BASE+'CORACAO%20PEQUENO/625897ce62ab3.png'},
      {nome:'ROSA', img:BASE+'CORACAO%20PEQUENO/625897ce681e5.png'},
    ]},
  { id:24, name:'Caixinha', cat:'outros', caixa:'Caixa c/ 50 un.', desc:'Caixinha plástica para doces, trufas e lembranças.',
    cores:[
      {nome:'TRANSPARENTE', img:BASE+'CAXINHA/6258994d8db52.png'},
      {nome:'ROSA', img:BASE+'CAXINHA/6258994d934db.png'},
      {nome:'AZUL', img:BASE+'CAXINHA/6258994d990d7.png'},
    ]},
  { id:25, name:'Tubetes', cat:'outros', caixa:'Caixa c/ 500 un.', desc:'Tubetes para doces e lembranças. Essencial em festas.',
    cores:[
      {nome:'TRANSPARENTE', img:BASE+'TUBETES/62589ae7bef0c.png'},
      {nome:'COLORIDOS', img:BASE+'TUBETES/62589ae7c48d2.png'},
    ]},
  { id:26, name:'Mini Tubetes', cat:'outros', caixa:'Caixa c/ 1000 un.', desc:'Mini tubetes econômicos para grandes eventos.',
    cores:[{nome:'TRANSPARENTE', img:BASE+'TUBETES/62589ae7bef0c.png'}]},
  { id:27, name:'Mini Maleta de PS', cat:'outros', caixa:'Caixa c/ 50 un.', desc:'Mini maleta para festas infantis e corporativas.',
    cores:[{nome:'PADRÃO', img:BASE+'MINI%20BAU/6258952266de9.png'}]},
];

// ── CARRINHO ──
let cart = JSON.parse(localStorage.getItem('9g_cart') || '[]');

function saveCart() { localStorage.setItem('9g_cart', JSON.stringify(cart)); }

function addToCart(product, corNome) {
  const key = `${product.id}-${corNome}`;
  const existing = cart.find(i => i.key === key);
  if (existing) existing.qty++;
  else {
    const cor = product.cores.find(c => c.nome === corNome);
    cart.push({ key, id: product.id, name: product.name, img: cor.img, corNome, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`✓ ${product.name} adicionado!`);
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.key !== key);
  saveCart();
  updateCartUI();
}

function removeItem(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = total;
    b.classList.toggle('visible', total > 0);
  });

  const itemsEl = document.getElementById('cartItems');
  const countLbl = document.getElementById('cartCountLbl');
  const totalEl = document.getElementById('cartTotal');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><div class="icon">🛒</div><p>Seu carrinho está vazio.<br>Adicione produtos para fazer seu pedido.</p></div>`;
    if (countLbl) countLbl.textContent = '';
    if (totalEl) totalEl.textContent = '0 produtos';
    return;
  }

  if (countLbl) countLbl.textContent = `${total} item${total > 1 ? 's' : ''} no carrinho`;
  if (totalEl) totalEl.textContent = `${total} produto${total > 1 ? 's' : ''}`;

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-thumb">
        <img src="${item.img}" alt="${item.name}" onerror="this.style.display='none'">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variant">${item.corNome}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${item.key}',-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.key}',1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeItem('${item.key}')">✕</button>
    </div>
  `).join('');

  let msg = 'Olá! Gostaria de fazer um pedido:\n\n';
  cart.forEach(i => { msg += `• ${i.name} (${i.corNome}) — Qtd: ${i.qty}\n`; });
  msg += '\nAguardo retorno. Obrigado!';
  const btn = document.getElementById('btnCheckout');
  if (btn) btn.href = `https://api.whatsapp.com/send?phone=5511986140795&text=${encodeURIComponent(msg)}`;
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

function initCart() {
  const overlay = document.getElementById('cartOverlay');
  const toggle = document.getElementById('cartToggle');
  const close = document.getElementById('cartClose');
  const clearBtn = document.getElementById('btnClearCart');
  if (toggle) toggle.addEventListener('click', () => overlay.classList.add('open'));
  if (close) close.addEventListener('click', () => overlay.classList.remove('open'));
  if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
  if (clearBtn) clearBtn.addEventListener('click', () => { cart = []; saveCart(); updateCartUI(); });
  updateCartUI();
}
