$commit = git rev-parse HEAD

switch ($commit) {
  '4df1bb4f42713cf76d20cbe14ecad641523f23e4' { git commit --amend -m 'feat: commit inicial' --no-edit }
  '39d22dca1c64e9992e60381951dd76d11ad51a82' { git commit --amend -m 'feat: configuração inicial com vite' --no-edit }
  'd54b2e1778811c4c9a3cdad4be516fa4da8ea2d0' { git commit --amend -m 'feat: configurar estilos globais' --no-edit }
  '1a16fe17f5469f3b2d631f4b7dc62d3c947828c7' { git commit --amend -m 'feat: adicionar componente de cabeçalho' --no-edit }
  'e7dbeaf93b0da086371456801f4bf0fd37c2578c' { git commit --amend -m 'feat: adicionar componente de layout' --no-edit }
  'f2d4359a8d563aa4f6b2aa701cac4f66e2162dce' { git commit --amend -m 'feat: reorganizar componentes em pastas' --no-edit }
  '5c0e4184cb8bc0186c1a2a37fcc89d20e1566486' { git commit --amend -m 'feat: criar componente de logo' --no-edit }
  '854dc699bf9ade555bda3f8a59d5356c13521977' { git commit --amend -m 'feat: criar layout do menu' --no-edit }
  '97935a8bbadf42e2621767223e062b5e4d85d200' { git commit --amend -m 'feat: criar layout do contador' --no-edit }
  '559b8184b39c399288e86042d91124c10e3f8b7d' { git commit --amend -m 'feat: criar estrutura do formulário' --no-edit }
  'c46a5904c754c18cb15d9944a3378f71b18b127d' { git commit --amend -m 'feat: treinar mensagens de commit' --no-edit }
  '30ac7c2fec620546effccbbe25045adb5727ab01' { git commit --amend -m 'feat: passar todas as propriedades do input' --no-edit }
  '2146b0f51377cccb684c35198f77e34002c8f74a' { git commit --amend -m 'feat: criar commit de casa' --no-edit }
  '71e7f09598262217eff590035175d901a3019dc6' { git commit --amend -m 'feat: criar layout dos ciclos' --no-edit }
  '54108595b53ceafcda1af64ef04ba2045566f49a' { git commit --amend -m 'feat: criar layout do botão de iniciar e parar' --no-edit }
  '066ec397b3eaf1337d51f25cad2ce3548949efdc' { git commit --amend -m 'feat: criar componente de rodapé' --no-edit }
  '238bf8d53d1f1b52e1950d16dbb087c19fcf1dbf' { git commit --amend -m 'feat: adicionar variáveis de tema claro' --no-edit }
  'c9878f6cb70ed3d499d7fcd38ef0ac6cfeacf2b5' { git commit --amend -m 'feat: adicionar aria-label e title ao menu' --no-edit }
  '85dc769975c020a15c8b98d64b8e9ac2b10b3021' { git commit --amend -m 'feat: atualizar tema escuro e claro' --no-edit }
  '59ed8bf1076a64f3df94871042cd74e2e610f18a' { git commit --amend -m 'feat: salvar tema no armazenamento local' --no-edit }
  'cd1eb33e9761008120e22f35ef44538723a12f4d' { git commit --amend -m 'feat: adicionar template padrão' --no-edit }
  '1b78f74213cc04c01b7b71419b878e9cdefdbca1' { git commit --amend -m 'feat: criar modelos' --no-edit }
  default { git commit --amend -m 'feat: atualizar funcionalidade' --no-edit }
}
