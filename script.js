document.getElementById('finance-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // ativos circulantes
    const ativoTotal = parseFloat(document.getElementById('ativoTotal').value)
    const ativoTotal2 = parseFloat(document.getElementById('ativoTotal2').value)
    const ativoCirculante = parseFloat(document.getElementById('ativoCirculante').value)
    const ativoCirculante2 = parseFloat(document.getElementById('ativoCirculante2').value)
    const caixa = parseFloat(document.getElementById('caixa').value)
    const caixa2 = parseFloat(document.getElementById('caixa2').value)
    const titulosEValoresAtiv = parseFloat(document.getElementById('titulosEValoresAtiv').value)
    const titulosEValoresAtiv2 = parseFloat(document.getElementById('titulosEValoresAtiv2').value)
    const ContasAReceAtiv = parseFloat(document.getElementById('ContasAReceAtiv').value)
    const ContasAReceAtiv2 = parseFloat(document.getElementById('ContasAReceAtiv2').value)
    const estoqueAtivo = parseFloat(document.getElementById('estoqueAtivo').value)
    const estoqueAtivo2 = parseFloat(document.getElementById('estoqueAtivo2').value)
    const impostosContriAtivo = parseFloat(document.getElementById('impostosContriAtivo').value)
    const impostosContriAtivo2 = parseFloat(document.getElementById('impostosContriAtivo2').value)
    const ativosParaVenda = parseFloat(document.getElementById('ativosParaVenda').value)
    const ativosParaVenda2 = parseFloat(document.getElementById('ativosParaVenda2').value)
    const ativosCirc = parseFloat(document.getElementById('ativosCirc').value)
    const ativosCirc2 = parseFloat(document.getElementById('ativosCirc2').value)
    // Ativos não circulantes
    const ativoNaoCirculantes = parseFloat(document.getElementById('ativosNaoCirculantes').value)
    const ativoNaoCirculantes2 = parseFloat(document.getElementById('ativosNaoCirculantes2').value)
    const realizavelLP = parseFloat(document.getElementById('realizavelLP').value)
    const realizavelLP2 = parseFloat(document.getElementById('realizavelLP2').value)
    const contasARece = parseFloat(document.getElementById('contasARece').value)
    const contasARece2 = parseFloat(document.getElementById('contasARece2').value)
    const titulosEVal = parseFloat(document.getElementById('titulosEVal').value)
    const titulosEVal2 = parseFloat(document.getElementById('titulosEVal2').value)
    const depositosJudic = parseFloat(document.getElementById('depositosJudic').value)
    const depositosJudic2 = parseFloat(document.getElementById('depositosJudic2').value)
    const impostoRenda = parseFloat(document.getElementById('impostoRenda').value)
    const impostoRenda2 = parseFloat(document.getElementById('impostoRenda2').value)
    const impostosContri = parseFloat(document.getElementById('impostosContri').value)
    const impostosContri2 = parseFloat(document.getElementById('impostosContri2').value)
    const outrosAtivos = parseFloat(document.getElementById('outrosAtivos').value)
    const outrosAtivos2 = parseFloat(document.getElementById('outrosAtivos2').value)
    const investimenosLP = parseFloat(document.getElementById('investimenosLP').value)
    const investimenosLP2 = parseFloat(document.getElementById('investimenosLP2').value)
    const imobilizado = parseFloat(document.getElementById('imobilizado').value)
    const imobilizado2 = parseFloat(document.getElementById('imobilizado2').value)
    const intangivel = parseFloat(document.getElementById('intangivel').value)
    const intangivel2 = parseFloat(document.getElementById('intangivel2').value)

    // ----------------------------------------------------------------------------- //
    // Passivo circulante
    const passivoCirculante = parseFloat(document.getElementById('passivoCirculante').value)
    const passivoCirculante2 = parseFloat(document.getElementById('passivoCirculante2').value)
    const passivoTotal = parseFloat(document.getElementById('passivoTotal').value)
    const passivoTotal2 = parseFloat(document.getElementById('passivoTotal2').value)
    const fornecedores = parseFloat(document.getElementById('fornecedores').value)
    const fornecedores2 = parseFloat(document.getElementById('fornecedores2').value)
    const financiamentos = parseFloat(document.getElementById('financiamentos').value)
    const financiamentos2 = parseFloat(document.getElementById('financiamentos2').value)
    const arrendamentos = parseFloat(document.getElementById('arrendamentos').value)
    const arrendamentos2 = parseFloat(document.getElementById('arrendamentos2').value)
    const impostosContriPassivo = parseFloat(document.getElementById('impostosContriPassivo').value)
    const impostosContriPassivo2 = parseFloat(document.getElementById('impostosContriPassivo2').value)
    const dividendosPropostos = parseFloat(document.getElementById('dividendosPropostos').value)
    const dividendosPropostos2 = parseFloat(document.getElementById('dividendosPropostos2').value)
    const provisaoDesmantelamento = parseFloat(document.getElementById('provisaoDesmantelamento').value)
    const provisaoDesmantelamento2 = parseFloat(document.getElementById('provisaoDesmantelamento2').value)
    const beneficiosEmpregados = parseFloat(document.getElementById('beneficiosEmpregados').value)
    const beneficiosEmpregados2 = parseFloat(document.getElementById('beneficiosEmpregados2').value)
    const passivosAssociados = parseFloat(document.getElementById('passivosAssociados').value)
    const passivosAssociados2 = parseFloat(document.getElementById('passivosAssociados2').value)
    const outrasContas = parseFloat(document.getElementById('outrasContas').value)
    const outrasContas2 = parseFloat(document.getElementById('outrasContas2').value)
    // Passivo não circulante
    const passivoNaoCirculante = parseFloat(document.getElementById('passivoNaoCirculante').value)
    const passivoNaoCirculante2 = parseFloat(document.getElementById('passivoNaoCirculante2').value)
    const financiamentosLP = parseFloat(document.getElementById('financiamentosLP').value)
    const financiamentosLP2 = parseFloat(document.getElementById('financiamentosLP2').value)
    const arrendamentosLP = parseFloat(document.getElementById('arrendamentosLP').value)
    const arrendamentosLP2 = parseFloat(document.getElementById('arrendamentosLP2').value)
    const impostoRendaLP = parseFloat(document.getElementById('impostoRendaLP').value)
    const impostoRendaLP2 = parseFloat(document.getElementById('impostoRendaLP2').value)
    const impostoRendaLPdiferidos = parseFloat(document.getElementById('impostoRendaLPdiferidos').value)
    const impostoRendaLPdiferidos2 = parseFloat(document.getElementById('impostoRendaLPdiferidos2').value)
    const beneficiosEmpregadosLP = parseFloat(document.getElementById('beneficiosEmpregadosLP').value)
    const beneficiosEmpregadosLP2 = parseFloat(document.getElementById('beneficiosEmpregadosLP2').value)
    const provisaoProcessosJudiciais = parseFloat(document.getElementById('provisaoProcessosJudiciais').value)
    const provisaoProcessosJudiciais2 = parseFloat(document.getElementById('provisaoProcessosJudiciais2').value)
    const provisaoDesmantelamentoLP = parseFloat(document.getElementById('provisaoDesmantelamentoLP').value)
    const provisaoDesmantelamentoLP2 = parseFloat(document.getElementById('provisaoDesmantelamentoLP2').value)
    const outrasContasLP = parseFloat(document.getElementById('outrasContasLP').value)
    const outrasContasLP2 = parseFloat(document.getElementById('outrasContasLP2').value)
    // Patrimonio Líquido
    const patrimonioLiquido = parseFloat(document.getElementById('patrimonioLiquido').value)
    const patrimonioLiquido2 = parseFloat(document.getElementById('patrimonioLiquido2').value)
    const capitalSubscrito = parseFloat(document.getElementById('capitalSubscrito').value)
    const capitalSubscrito2 = parseFloat(document.getElementById('capitalSubscrito2').value)
    const reservaCapital = parseFloat(document.getElementById('reservaCapital').value)
    const reservaCapital2 = parseFloat(document.getElementById('reservaCapital2').value)
    const reservaLucros = parseFloat(document.getElementById('reservaLucros').value)
    const reservaLucros2 = parseFloat(document.getElementById('reservaLucros2').value)
    const resultadosAbrangentes = parseFloat(document.getElementById('resultadosAbrangentes').value)
    const resultadosAbrangentes2 = parseFloat(document.getElementById('resultadosAbrangentes2').value)
    const acionistasNaoControl = parseFloat(document.getElementById('acionistasNaoControl').value)
    const acionistasNaoControl2 = parseFloat(document.getElementById('acionistasNaoControl2').value)
    // DRE
    const vendasLiquidas = parseFloat(document.getElementById('vendasLiquidas').value)
    const vendasLiquidas2 = parseFloat(document.getElementById('vendasLiquidas2').value)
    const lucroLiquido = parseFloat(document.getElementById('lucroLiquido').value)
    const lucroLiquido2 = parseFloat(document.getElementById('lucroLiquido2').value)
    const custoBens = parseFloat(document.getElementById('custoBens').value)
    const custoBens2 = parseFloat(document.getElementById('custoBens2').value)

    // Cálculos de análise vertical para o ano 2023 - ATIVOS
    const caixaVertiANO1 = (caixa / ativoTotal * 100).toFixed(2)
    const titulosEValVertiAtivANO1 = (titulosEValoresAtiv / ativoTotal * 100).toFixed(2);
    const contasAReceVertiAtivANO1 = (ContasAReceAtiv / ativoTotal * 100).toFixed(2);
    const estoqueAtivoVertiANO1 = (estoqueAtivo / ativoTotal * 100).toFixed(2);
    const impostosContriAtivoVertiANO1 = (impostosContriAtivo / ativoTotal * 100).toFixed(2);
    const ativosParaVendaVertiANO1 = (ativosParaVenda / ativoTotal * 100).toFixed(2);
    const ativosCircVertiANO1 = (ativosCirc / ativoTotal * 100).toFixed(2);
    const realizavelLPVertiANO1 = (realizavelLP / ativoTotal * 100).toFixed(2);
    const contasAReceVertiANO1 = (contasARece / ativoTotal * 100).toFixed(2);
    const titulosEValVertiANO1 = (titulosEVal / ativoTotal * 100).toFixed(2);
    const depositosJudicVertiANO1 = (depositosJudic / ativoTotal * 100).toFixed(2);
    const impostoRendaVertiANO1 = (impostoRenda / ativoTotal * 100).toFixed(2);
    const impostosContriVertiANO1 = (impostosContri / ativoTotal * 100).toFixed(2);
    const outrosAtivosVertiANO1 = (outrosAtivos / ativoTotal * 100).toFixed(2);
    const investimenosLPVertiANO1 = (investimenosLP / ativoTotal * 100).toFixed(2);
    const imobilizadoVertiANO1 = (imobilizado / ativoTotal * 100).toFixed(2);
    const intangivelVertiANO1 = (intangivel / ativoTotal * 100).toFixed(2);

    // PASSIVOS
    const fornecedoresVertiANO1 = (fornecedores / passivoTotal * 100).toFixed(2);
    const financiamentosVertiANO1 = (financiamentos / passivoTotal * 100).toFixed(2);
    const arrendamentosVertiANO1 = (arrendamentos / passivoTotal * 100).toFixed(2);
    const impostosContriPassivoVertiANO1 = (impostosContriPassivo / passivoTotal * 100).toFixed(2);
    const dividendosPropostosVertiANO1 = (dividendosPropostos / passivoTotal * 100).toFixed(2);
    const provisaoDesmantelamentoVertiANO1 = (provisaoDesmantelamento / passivoTotal * 100).toFixed(2);
    const beneficiosEmpregadosVertiANO1 = (beneficiosEmpregados / passivoTotal * 100).toFixed(2);
    const passivosAssociadosVertiANO1 = (passivosAssociados / passivoTotal * 100).toFixed(2);
    const outrasContasVertiANO1 = (outrasContas / passivoTotal * 100).toFixed(2);
    const financiamentosLPVertiANO1 = (financiamentosLP / passivoTotal * 100).toFixed(2);
    const arrendamentosLPVertiANO1 = (arrendamentosLP / passivoTotal * 100).toFixed(2);
    const impostoRendaLPVertiANO1 = (impostoRendaLP / passivoTotal * 100).toFixed(2);
    const impostoRendaLPdiferidosVertiANO1 = (impostoRendaLPdiferidos / passivoTotal * 100).toFixed(2);
    const beneficiosEmpregadosLPVertiANO1 = (beneficiosEmpregadosLP / passivoTotal * 100).toFixed(2);
    const provisaoProcessosJudiciaisVertiANO1 = (provisaoProcessosJudiciais / passivoTotal * 100).toFixed(2);
    const provisaoDesmantelamentoLPVertiANO1 = (provisaoDesmantelamentoLP / passivoTotal * 100).toFixed(2);
    const outrasContasLPVertiANO1 = (outrasContasLP / passivoTotal * 100).toFixed(2);
    const patrimonioLiquidoVertiANO1 = (patrimonioLiquido / passivoTotal * 100).toFixed(2);
    const capitalSubscritoVertiANO1 = (capitalSubscrito / passivoTotal * 100).toFixed(2);
    const reservaCapitalVertiANO1 = (reservaCapital / passivoTotal * 100).toFixed(2);
    const reservaLucrosVertiANO1 = (reservaLucros / passivoTotal * 100).toFixed(2);
    const resultadosAbrangentesVertiANO1 = (resultadosAbrangentes / passivoTotal * 100).toFixed(2);
    const acionistasNaoControlVertiANO1 = (acionistasNaoControl / passivoTotal * 100).toFixed(2);

    // Cálculos de análise vertical para o ano 2022
    const caixaVertiANO2 = (caixa2 / ativoTotal2 * 100).toFixed(2);
    const titulosEValVertiCircANO2 = (titulosEValoresAtiv2 / ativoTotal2 * 100).toFixed(2);
    const contasAReceVertiCircANO2 = (ContasAReceAtiv2 / ativoTotal2 * 100).toFixed(2);
    const estoqueAtivoVertiANO2 = (estoqueAtivo2 / ativoTotal2 * 100).toFixed(2);
    const impostosContriAtivoVertiANO2 = (impostosContriAtivo2 / ativoTotal2 * 100).toFixed(2);
    const ativosParaVendaVertiANO2 = (ativosParaVenda2 / ativoTotal2 * 100).toFixed(2);
    const ativosCircVertiANO2 = (ativosCirc2 / ativoTotal2 * 100).toFixed(2);
    const realizavelLPVertiANO2 = (realizavelLP2 / ativoTotal2 * 100).toFixed(2);
    const contasAReceVertiANO2 = (contasARece2 / ativoTotal2 * 100).toFixed(2);
    const titulosEValVertiANO2 = (titulosEVal2 / ativoTotal2 * 100).toFixed(2);
    const depositosJudicVertiANO2 = (depositosJudic2 / ativoTotal2 * 100).toFixed(2);
    const impostoRendaVertiANO2 = (impostoRenda2 / ativoTotal2 * 100).toFixed(2);
    const impostosContriVertiANO2 = (impostosContri2 / ativoTotal2 * 100).toFixed(2);
    const outrosAtivosVertiANO2 = (outrosAtivos2 / ativoTotal2 * 100).toFixed(2);
    const investimenosLPVertiANO2 = (investimenosLP2 / ativoTotal2 * 100).toFixed(2);
    const imobilizadoVertiANO2 = (imobilizado2 / ativoTotal2 * 100).toFixed(2);
    const intangivelVertiANO2 = (intangivel2 / ativoTotal2 * 100).toFixed(2);

    // PASSIVOS
    const fornecedoresVertiANO2 = (fornecedores2 / passivoTotal2 * 100).toFixed(2);
    const financiamentosVertiANO2 = (financiamentos2 / passivoTotal2 * 100).toFixed(2);
    const arrendamentosVertiANO2 = (arrendamentos2 / passivoTotal2 * 100).toFixed(2);
    const impostosContriPassivoVertiANO2 = (impostosContriPassivo2 / passivoTotal2 * 100).toFixed(2);
    const dividendosPropostosVertiANO2 = (dividendosPropostos2 / passivoTotal2 * 100).toFixed(2);
    const provisaoDesmantelamentoVertiANO2 = (provisaoDesmantelamento2 / passivoTotal2 * 100).toFixed(2);
    const beneficiosEmpregadosVertiANO2 = (beneficiosEmpregados2 / passivoTotal2 * 100).toFixed(2);
    const passivosAssociadosVertiANO2 = (passivosAssociados2 / passivoTotal2 * 100).toFixed(2);
    const outrasContasVertiANO2 = (outrasContas2 / passivoTotal2 * 100).toFixed(2);
    const financiamentosLPVertiANO2 = (financiamentosLP2 / passivoTotal2 * 100).toFixed(2);
    const arrendamentosLPVertiANO2 = (arrendamentosLP2 / passivoTotal2 * 100).toFixed(2);
    const impostoRendaLPVertiANO2 = (impostoRendaLP2 / passivoTotal2 * 100).toFixed(2);
    const impostoRendaLPdiferidosVertiANO2 = (impostoRendaLPdiferidos2 / passivoTotal2 * 100).toFixed(2);
    const beneficiosEmpregadosLPVertiANO2 = (beneficiosEmpregadosLP2 / passivoTotal2 * 100).toFixed(2);
    const provisaoProcessosJudiciaisVertiANO2 = (provisaoProcessosJudiciais2 / passivoTotal2 * 100).toFixed(2);
    const provisaoDesmantelamentoLPVertiANO2 = (provisaoDesmantelamentoLP2 / passivoTotal2 * 100).toFixed(2);
    const outrasContasLPVertiANO2 = (outrasContasLP2 / passivoTotal2 * 100).toFixed(2);
    const patrimonioLiquidoVertiANO2 = (patrimonioLiquido2 / passivoTotal2 * 100).toFixed(2);
    const capitalSubscritoVertiANO2 = (capitalSubscrito2 / passivoTotal2 * 100).toFixed(2);
    const reservaCapitalVertiANO2 = (reservaCapital2 / passivoTotal2 * 100).toFixed(2);
    const reservaLucrosVertiANO2 = (reservaLucros2 / passivoTotal2 * 100).toFixed(2);
    const resultadosAbrangentesVertiANO2 = (resultadosAbrangentes2 / passivoTotal2 * 100).toFixed(2);
    const acionistasNaoControlVertiANO2 = (acionistasNaoControl2 / passivoTotal2 * 100).toFixed(2);

    // Cálculos de análise horizontal
    const ativoHori = (((ativoTotal-ativoTotal2)/ativoTotal2) * 100).toFixed(2)
    const caixaHori = ((caixa - caixa2)/caixa2*100).toFixed(2)
    const titulosEValoresAtivHori = ((titulosEValoresAtiv-titulosEValoresAtiv2)/titulosEValoresAtiv2*100).toFixed(2)
    const ContasAReceAtiv2Hori = ((ContasAReceAtiv-ContasAReceAtiv2)/ContasAReceAtiv2*100).toFixed(2)
    const estoqueAtivo2Hori = ((estoqueAtivo - estoqueAtivo2)/estoqueAtivo2*100).toFixed(2)
    const impostosContriAtivo2Hori = ((impostosContriAtivo-impostosContriAtivo2)/impostosContriAtivo2*100).toFixed(2)
    const ativosParaVenda2Hori = ((ativosParaVenda-ativosParaVenda2)/ativosParaVenda2*100).toFixed(2)
    const ativosCirc2Hori = ((ativosCirc-ativosCirc2)/ativosCirc2*100).toFixed(2)
    const realizavelLP2Hori = ((realizavelLP-realizavelLP2)/realizavelLP2*100).toFixed(2)
    const contasARece2Hori = ((contasARece-contasARece2)/contasARece2*100).toFixed(2)
    const titulosEVal2Hori = ((titulosEVal-titulosEVal2)/titulosEVal2*100).toFixed(2)
    const depositosJudic2Hori = ((depositosJudic-depositosJudic2)/depositosJudic2*100).toFixed(2)
    const impostoRenda2Hori = ((impostoRenda-impostoRenda2)/impostoRenda2*100).toFixed(2)
    const impostosContri2Hori = ((impostosContri-impostosContri2)/impostosContri2*100).toFixed(2)
    const outrosAtivos2Hori = ((outrosAtivos-outrosAtivos2)/outrosAtivos2*100).toFixed(2)
    const investimenosLP2Hori = ((investimenosLP-investimenosLP2)/investimenosLP2*100).toFixed(2)
    const imobilizado2Hori = ((imobilizado-imobilizado2)/imobilizado2*100).toFixed(2)
    const intangivel2Hori = ((intangivel-intangivel2)/intangivel2*100).toFixed(2)
    //PASSIVOS
    const passivoTotal2Hori = ((passivoTotal-passivoTotal2)/passivoTotal2*100).toFixed(2)
    const fornecedores2Hori = ((fornecedores-fornecedores2)/fornecedores2*100).toFixed(2)
    const financiamentos2Hori = ((financiamentos-financiamentos2)/financiamentos2*100).toFixed(2)
    const arrendamentos2Hori = ((arrendamentos-arrendamentos2)/arrendamentos2*100).toFixed(2)
    const impostosContriPassivo2Hori = ((impostosContriPassivo-impostosContriPassivo2)/impostosContriPassivo2*100).toFixed(2)
    const dividendosPropostos2Hori = ((dividendosPropostos-dividendosPropostos2)/dividendosPropostos2*100).toFixed(2)
    const beneficiosEmpregados2Hori = ((beneficiosEmpregados-beneficiosEmpregados2)/beneficiosEmpregados2*100).toFixed(2)
    const passivosAssociados2Hori = ((passivosAssociados-passivosAssociados2)/passivosAssociados2*100).toFixed(2)
    const outrasContas2Hori = ((outrasContas-outrasContas2)/outrasContas2*100).toFixed(2)
    const financiamentosLP2Hori = ((financiamentosLP-financiamentosLP2)/financiamentosLP2*100).toFixed(2)
    const arrendamentosLP2Hori = ((arrendamentosLP-arrendamentosLP2)/arrendamentosLP2*100).toFixed(2)
    const impostoRendaLP2Hori = ((impostoRendaLP-impostoRendaLP2)/impostoRendaLP2*100).toFixed(2)
    const impostoRendaLPdiferidos2Hori = ((impostoRendaLPdiferidos-impostoRendaLPdiferidos2)/impostoRendaLPdiferidos2*100).toFixed(2)
    const beneficiosEmpregadosLP2Hori = ((beneficiosEmpregadosLP-beneficiosEmpregadosLP2)/beneficiosEmpregadosLP2*100).toFixed(2)
    const provisaoProcessosJudiciais2Hori = ((provisaoProcessosJudiciais-provisaoProcessosJudiciais2)/provisaoProcessosJudiciais2*100).toFixed(2)
    const provisaoDesmantelamentoLP2Hori = ((provisaoDesmantelamentoLP-provisaoDesmantelamentoLP2)/provisaoDesmantelamentoLP2*100).toFixed(2)
    const outrasContasLP2Hori = ((outrasContasLP-outrasContasLP2)/outrasContasLP2*100).toFixed(2)
    const patrimonioLiquido2Hori = ((patrimonioLiquido-patrimonioLiquido2)/patrimonioLiquido2*100).toFixed(2)
    const capitalSubscrito2Hori = ((capitalSubscrito-capitalSubscrito2)/capitalSubscrito2*100).toFixed(2)
    const reservaCapital2Hori = ((reservaCapital-reservaCapital2)/reservaCapital2*100).toFixed(2)
    const reservaLucros2Hori = ((reservaLucros-reservaLucros2)/reservaLucros2*100).toFixed(2)
    const resultadosAbrangentes2Hori = ((resultadosAbrangentes-resultadosAbrangentes2)/resultadosAbrangentes2*100).toFixed(2)
    const acionistasNaoControl2Hori = ((acionistasNaoControl-acionistasNaoControl2)/acionistasNaoControl2*100).toFixed(2)

    // Cálculos dos Índices de estrutura de capital, liquidez e rentabilidade
    const PCT2023 = ((passivoCirculante + passivoNaoCirculante) / patrimonioLiquido * 100).toFixed(2);
    const PCT2022 = ((passivoCirculante2 + passivoNaoCirculante2) / patrimonioLiquido2 * 100).toFixed(2);
    const END2023 = (passivoCirculante / (passivoCirculante + passivoNaoCirculante)* 100).toFixed(2);
    const END2022 = (passivoCirculante2 / (passivoCirculante2 + passivoNaoCirculante2)* 100).toFixed(2);
    const IPL2023 = (imobilizado / patrimonioLiquido * 100).toFixed(2);
    const IPL2022 = (imobilizado2 / patrimonioLiquido2 * 100).toFixed(2);

    const LG2023 = (ativoCirculante / (passivoCirculante + passivoNaoCirculante)* 100).toFixed(2);
    const LG2022 = (ativoCirculante2 / (passivoCirculante2 + passivoNaoCirculante2)* 100).toFixed(2);
    const LC2023 = (ativoCirculante / passivoCirculante * 100).toFixed(2);
    const LC2022 = (ativoCirculante2 / passivoCirculante2 * 100).toFixed(2);
    const LS2023 = (91315 / passivoCirculante * 100).toFixed(2);
    const LS2022 = (67865 / passivoCirculante2 * 100).toFixed(2);

    const GA2023 = (vendasLiquidas / ativoTotal* 100).toFixed(2);
    const GA2022 = (vendasLiquidas2 / ativoTotal2 * 100).toFixed(2);
    const ML2023 = (lucroLiquido / vendasLiquidas * 100).toFixed(2);
    const ML2022 = (lucroLiquido2 / vendasLiquidas2 * 100).toFixed(2);
    const RA2023 = (lucroLiquido / ativoTotal * 100).toFixed(2);
    const RA2022 = (lucroLiquido2 / ativoTotal2 * 100).toFixed(2);
    const RPL2023 = (lucroLiquido / patrimonioLiquido * 100).toFixed(2);
    const RPL2022 = (lucroLiquido2 / patrimonioLiquido2 * 100).toFixed(2);

    const SOL2023 = ((ativoCirculante + ativoNaoCirculantes) / (passivoCirculante + passivoNaoCirculante) * 100).toFixed(2)
    const SOL2022 = ((ativoCirculante2 + ativoNaoCirculantes2) / (passivoCirculante2 + passivoNaoCirculante2) * 100).toFixed(2)
    const EST2023 = ((custoBens / estoqueAtivo)* 100).toFixed(2)
    const EST2022 = ((custoBens2 / estoqueAtivo2) * 100).toFixed(2)

    function getTextoPct(PCT){
        if (PCT > 100)
            return `A alta participação de capital de terceiros (${PCT}%) sugere uma dependência significativa de financiamentos externos, que pode impactar negativamente a empresa.`
        else
            return `A baixa participação de capital de terceiros (${PCT}) sugere uma indepêndecia de financiamentos externos da empresa.`
    }

    function getTextoLiquidez(LG){
        if (LG > 20)
            return "E a liquidez geral está em um nível saudável, indicando que a empresa possui uma boa capacidade de honrar seus compromissos de curto e longo prazo."
        else 
            return "E a liquidez geral está abaixo do ideal, sugerindo que a empresa pode enfrentar dificuldades para cumprir suas obrigações financeiras."    
    }

    function getTextoRentabilidade(ML) {
        if (ML > 20)
            return "A margem líquida é alta, indicando que a empresa está gerando um lucro significativo em relação às suas vendas. Isso demonstra uma boa eficiência operacional e controle de custos."
        else
        return "A margem líquida é baixa, sugerindo que a empresa pode estar enfrentando dificuldades para controlar seus custos ou aumentar suas receitas. Isso pode ser um sinal de eficiência operacional reduzida."    
    }
    
    // Exibir resultados
    const results = `
        <h2>Resultados</h2>
        <h2>Análise Horizontal - Ativos Circulantes</h2>
        <h4>Variação do Ativo Total: ${ativoHori}%</h4>
        <p>Variação do Caixa: ${caixaHori}%</p>
        <p>Variação de Titulos e valores: ${titulosEValoresAtivHori}%</p>
        <p>Variação do Contas a receber: ${ContasAReceAtiv2Hori}%</p>
        <p>Variação do Estoque: ${estoqueAtivo2Hori}%</p>
        <p>Variação do Impostos e contribuições: ${impostosContriAtivo2Hori}%</p>
        <p>Variação do Ativos para venda: ${ativosParaVenda2Hori}%</p>
        <p>Variação de Outros ativos: ${ativosCirc2Hori}%</p>
        <h2>Ativos Não Circulantes</h2>
        <p>Variação do Realizavel a longo prazo: ${realizavelLP2Hori}%</p>
        <p>Variação do Contas a receber(Liquidas): ${contasARece2Hori}%</p>
        <p>Variação do Títulos e valores mobiliários: ${titulosEVal2Hori}%</p>
        <p>Variação do Depósitos judiciais: ${depositosJudic2Hori}%</p>
        <p>Variação do Imposto renda: ${impostoRenda2Hori}%</p>
        <p>Variação do Impostos e contribuições: ${impostosContri2Hori}%</p>
        <p>Variação do Outros ativos longo prazo: ${outrosAtivos2Hori}%</p>
        <p>Variação do Investimentos: ${investimenosLP2Hori}%</p>
        <p>Variação do Imobilizado: ${imobilizado2Hori}%</p>
        <p>Variação do Intangível: ${intangivel2Hori}%</p>
        <h2>Análise Horizontal - Passivos Circulantes</h2>
        <h4>Variação do Passivo Total: ${passivoTotal2Hori}%</h4>
        <p>Variação do Fornecedores: ${fornecedores2Hori}%</p>
        <p>Variação do Financiamentos: ${financiamentos2Hori}%</p>
        <p>Variação do Arrendamentos: ${arrendamentos2Hori}%</p>
        <p>Variação do Impostos e contribuições: ${impostosContriPassivo2Hori}%</p>
        <p>Variação do Dividendos propostos: ${dividendosPropostos2Hori}%</p>
        <p>Variação do Benefícios a empregados: ${beneficiosEmpregados2Hori}%</p>
        <p>Variação do Passivos associados: ${passivosAssociados2Hori}%</p>
        <p>Variação do Outras contas e despesas a pagar: ${outrasContas2Hori}%</p>
        <h2>Passivos Não Circulantes</h2>
        <p>Variação do Financiamentos: ${financiamentosLP2Hori}%</p>
        <p>Variação do Arrendamentos: ${arrendamentosLP2Hori}%</p>
        <p>Variação do Imposto Renda e contribuição social correntes: ${impostoRendaLP2Hori}%</p>
        <p>Variação do Imposto Renda e contribuição social diferidos: ${impostoRendaLPdiferidos2Hori}%</p>
        <p>Variação do Benefícios a empregados: ${beneficiosEmpregadosLP2Hori}%</p>
        <p>Variação do Provisão processos judiciais: ${provisaoProcessosJudiciais2Hori}%</p>
        <p>Variação do Provisão desmantelamento áreas: ${provisaoDesmantelamentoLP2Hori}%</p>
        <p>Variação do Outras contas longo prazo: ${outrasContasLP2Hori}%</p>
        <h2>Patrimônio Líquido</h2>
        <p>Variação do Patrimônio líquido: ${patrimonioLiquido2Hori}%</p>
        <p>Variação do Capital subscrito: ${capitalSubscrito2Hori}%</p>
        <p>Variação do Reserva Capital: ${reservaCapital2Hori}%</p>
        <p>Variação do Reserva de lucros: ${reservaLucros2Hori}%</p>
        <p>Variação do Resultados abrangentes: ${resultadosAbrangentes2Hori}%</p>
        <p>Variação do Participação acionistas não controladores: ${acionistasNaoControl2Hori}%</p>
        <h2>Análise Vertical 2023</h2>
        <h4>Ativos</h4>
        <p>Ativo total: ${caixaVertiANO1}%</p>
        <p>Títulos e valores total: ${titulosEValVertiAtivANO1}%</p>
        <p>Contas a receber: ${contasAReceVertiAtivANO1}%</p>
        <p>Estoque: ${estoqueAtivoVertiANO1}%</p>
        <p>Impostos e contribuições: ${impostosContriAtivoVertiANO1}%</p>
        <p>Ativos para venda: ${ativosParaVendaVertiANO1}%</p>
        <p>Realizavel longo prazo: ${realizavelLPVertiANO1}%</p>
        <p>Contas a receber(líquidas): ${contasAReceVertiANO1}%</p>
        <p>Títulos e valores mobiliários: ${titulosEValVertiANO1}%</p>
        <p>Depósitos judiciais: ${depositosJudicVertiANO1}%</p>
        <p>Imposto de renda e contribuição social diferidos: ${impostoRendaVertiANO1}%</p>
        <p>Impostos e contribuições: ${impostosContriVertiANO1}%</p>
        <p>Outros ativos realizáveis a longo prazo: ${outrosAtivosVertiANO1}%</p>
        <p>Investimentos: ${investimenosLPVertiANO1}%</p>
        <p>Imobilizado: ${imobilizadoVertiANO1}%</p>
        <p>Intangível: ${intangivelVertiANO1}%</p>
        <p>Outros ativos: ${ativosCircVertiANO1}%</p>
        <h4>Passivos</h4>
        <p>Fornecedores: ${fornecedoresVertiANO1}%</p>
        <p>Financiamentos: ${financiamentosVertiANO1}%</p>
        <p>Arrendamentos: ${arrendamentosVertiANO1}%</p>
        <p>Impostos e contribuições: ${impostosContriPassivoVertiANO1}%</p>
        <p>Dividendos propostos: ${dividendosPropostosVertiANO1}%</p>
        <p>Provisão para desmantelamento de áreas: ${provisaoDesmantelamentoVertiANO1}%</p>
        <p>Benefícios a empregados: ${beneficiosEmpregadosVertiANO1}%</p>
        <p>Passivos associados a ativos mantidos para venda: ${passivosAssociadosVertiANO1}%</p>
        <p>Outras contas e despesas a pagar: ${outrasContasVertiANO1}%</p>
        <p>Financiamentos: ${financiamentosLPVertiANO1}%</p>
        <p>Arrendamentos: ${arrendamentosLPVertiANO1}%</p>
        <p>Imposto de renda e contribuição social correntes: ${impostoRendaLPVertiANO1}%</p>
        <p>Imposto de renda e contribuição social diferidos: ${impostoRendaLPdiferidosVertiANO1}%</p>
        <p>Benefícios a empregados: ${beneficiosEmpregadosLPVertiANO1}%</p>
        <p>Provisão para processos judiciais e administrativos: ${provisaoProcessosJudiciaisVertiANO1}%</p>
        <p>Provisão para desmantelamento de áreas: ${provisaoDesmantelamentoLPVertiANO1}%</p>
        <p>Outras contas e despesas a pagar: ${outrasContasLPVertiANO1}%</p>
        <p>Total Patrimônio Líquido: ${patrimonioLiquidoVertiANO1}%</p>
        <p>Capital subscrito e integralizado: ${capitalSubscritoVertiANO1}%</p>
        <p>Reserva de capital, transações de capital e ações em tesouraria: ${reservaCapitalVertiANO1}%</p>
        <p>Reservas de lucros: ${reservaLucrosVertiANO1}%</p>
        <p>Outros resultados abrangentes: ${resultadosAbrangentesVertiANO1}%</p>
        <p>Participação dos acionistas não controladores: ${acionistasNaoControlVertiANO1}%</p>
        <h2>Análise Vertical 2022</h2>
        <h4>Ativos</h4>
        <p>Ativo total: ${caixaVertiANO2}%</p>
        <p>Títulos e valores total: ${titulosEValVertiCircANO2}%</p>
        <p>Contas a receber: ${contasAReceVertiCircANO2}%</p>
        <p>Estoque: ${estoqueAtivoVertiANO2}%</p>
        <p>Impostos e contribuições: ${impostosContriAtivoVertiANO2}%</p>
        <p>Ativos para venda: ${ativosParaVendaVertiANO2}%</p>
        <p>Realizavel longo prazo: ${realizavelLPVertiANO2}%</p>
        <p>Contas a receber(líquidas): ${contasAReceVertiANO2}%</p>
        <p>Títulos e valores mobiliários: ${titulosEValVertiANO2}%</p>
        <p>Depósitos judiciais: ${depositosJudicVertiANO2}%</p>
        <p>Imposto de renda e contribuição social diferidos: ${impostoRendaVertiANO2}%</p>
        <p>Impostos e contribuições: ${impostosContriVertiANO2}%</p>
        <p>Outros ativos realizáveis a longo prazo: ${outrosAtivosVertiANO2}%</p>
        <p>Investimentos: ${investimenosLPVertiANO2}%</p>
        <p>Imobilizado: ${imobilizadoVertiANO2}%</p>
        <p>Intangível: ${intangivelVertiANO2}%</p>
        <p>Outros ativos: ${ativosCircVertiANO2}%</p>
        <h4>Passivos</h4>
        <p>Fornecedores: ${fornecedoresVertiANO2}%</p>
        <p>Financiamentos: ${financiamentosVertiANO2}%</p>
        <p>Arrendamentos: ${arrendamentosVertiANO2}%</p>
        <p>Impostos e contribuições: ${impostosContriPassivoVertiANO2}%</p>
        <p>Dividendos propostos: ${dividendosPropostosVertiANO2}%</p>
        <p>Provisão para desmantelamento de áreas: ${provisaoDesmantelamentoVertiANO2}%</p>
        <p>Benefícios a empregados: ${beneficiosEmpregadosVertiANO2}%</p>
        <p>Passivos associados a ativos mantidos para venda: ${passivosAssociadosVertiANO2}%</p>
        <p>Outras contas e despesas a pagar: ${outrasContasVertiANO2}%</p>
        <p>Financiamentos: ${financiamentosLPVertiANO2}%</p>
        <p>Arrendamentos: ${arrendamentosLPVertiANO2}%</p>
        <p>Imposto de renda e contribuição social correntes: ${impostoRendaLPVertiANO2}%</p>
        <p>Imposto de renda e contribuição social diferidos: ${impostoRendaLPdiferidosVertiANO2}%</p>
        <p>Benefícios a empregados: ${beneficiosEmpregadosLPVertiANO2}%</p>
        <p>Provisão para processos judiciais e administrativos: ${provisaoProcessosJudiciaisVertiANO2}%</p>
        <p>Provisão para desmantelamento de áreas: ${provisaoDesmantelamentoLPVertiANO2}%</p>
        <p>Outras contas e despesas a pagar: ${outrasContasLPVertiANO2}%</p>
        <p>Total Patrimônio Líquido: ${patrimonioLiquidoVertiANO2}%</p>
        <p>Capital subscrito e integralizado: ${capitalSubscritoVertiANO2}%</p>
        <p>Reserva de capital, transações de capital e ações em tesouraria: ${reservaCapitalVertiANO2}%</p>
        <p>Reservas de lucros: ${reservaLucrosVertiANO2}%</p>
        <p>Outros resultados abrangentes: ${resultadosAbrangentesVertiANO2}%</p>
        <p>Participação dos acionistas não controladores: ${acionistasNaoControlVertiANO2}%</p>
        <h2>Índices Contábeis 2023</h2>
        <p>Participação capital de terceiros: ${PCT2023}%</p>        
        <p>Composição do endividamento: ${END2023}%</p>        
        <p>Imobilização do patrimônio líquido: ${IPL2023}%</p>        
        <p>Liquidez geral: ${LG2023}%</p>        
        <p>Liquidez corrente: ${LC2023}%</p>        
        <p>Liquidez seca: ${LS2023}%</p>        
        <p>Giro do ativo: ${GA2023}%</p>        
        <p>Margem líquida: ${ML2023}%</p>        
        <p>Rentabilidade do ativo: ${RA2023}%</p>        
        <p>Rentabilidade do patrimônio líquido: ${RPL2023}%</p>
        <p>Índice de solvência: ${SOL2023}%</p>
        <p>Rotatividade do estoque: ${EST2023}%</p>
        <br>
        <p>${getTextoPct(PCT2023)}
        ${getTextoLiquidez(LG2023)}
        ${getTextoRentabilidade(ML2023)}</p> 
        <h2>Índices Contábeis 2022</h2>
        <p>Participação capital de terceiros: ${PCT2022}%</p>        
        <p>Composição do endividamento: ${END2022}%</p>        
        <p>Imobilização do patrimônio líquido: ${IPL2022}%</p>        
        <p>Liquidez geral: ${LG2022}%</p>        
        <p>Liquidez corrente: ${LC2022}%</p>        
        <p>Liquidez seca: ${LS2022}%</p>        
        <p>Giro do ativo: ${GA2022}%</p>        
        <p>Margem líquida: ${ML2022}%</p>       
        <p>Rentabilidade do ativo: ${RA2022}%</p>        
        <p>Rentabilidade do patrimônio líquido: ${RPL2022}%</p>
        <p>Índice de solvência: ${SOL2022}%</p>
        <p>Rotatividade do estoque: ${EST2022}%</p>
        <br>
        <p>${getTextoPct(PCT2022)}
        ${getTextoLiquidez(LG2022)}
        ${getTextoRentabilidade(ML2022)}</p>        

    `;

    document.getElementById('results').innerHTML = results;
});
