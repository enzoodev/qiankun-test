import{a}from"./auditProject1734621655117.js";import"./index1734621655117.js";import{B as i}from"./index17346216551174.js";class o{constructor(e){this.api=e}async getAll({page:e,rowsPerPage:s,...t}){this.api.override_url("pesquisar",`${e}-${s}`);const r=await this.api.find_all({params:t});return{list:r.dados.dados,total:r.dados.totalRegistros}}async getById(e){return(await this.api.find_by_id(e)).dados}async create(e){return(await this.api.save({...e,auditProject:a})).mensagem}async update({id:e,...s}){return(await this.api.update({...s,auditProject:a},e)).mensagem}async changeStatus({id:e,status:s}){return this.api.override_url("status",e),(await this.api.update({ativo:s,auditProject:a})).mensagem}async exportReport(e){return this.api.override_url("exportar-inventario"),this.api.find_all({params:e})}}const u=new o(new i("https://dev.gerais.mg.def.br","patrimonio/service".concat("/patrimonio-ti")));export{u as i};
