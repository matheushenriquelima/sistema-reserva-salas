export class ClienteUtil {

    static COLUNAS_PADRAO = [
        {
            cabecalho: 'Nome',
            parametro: 'nome',
            parametroOrdenacao: 'cliente.nome',
        },
        {
            cabecalho: 'Endereço',
            parametro: 'endereco',
            parametroOrdenacao: 'cliente.endereco'
        },
        {
            cabecalho: 'Data de Nascimento',
            parametro: 'dataNasc',
            parametroOrdenacao: 'cliente.dataNasc'
        },
        {
            cabecalho: 'Telefone',
            parametro: 'telefone',
            parametroOrdenacao: 'cliente.telefone'
        },
        {
            cabecalho: 'RG',
            parametro: 'rg',
            parametroOrdenacao: 'cliente.rg'
        },
        {
            cabecalho: 'CPF',
            parametro: 'cpf',
            parametroOrdenacao: 'cliente.cpf'
        },
        {
            cabecalho: 'Ações',
            parametro: 'acoes'
        },
    ];

    static MENSAGEM_PESQUISA_SEM_RETORNO = 'Nenhum registro encontrado para a pesquisa informada.';

}
