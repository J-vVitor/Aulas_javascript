const pontuacaoUsuario = 400;

///if (pontuacaoUsuario >= 1000){
    ///console.log('Usuário vip');
///}else {
    ///console.log('Usuário normal');
///}

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal'
console.log(nivelUsuario);
