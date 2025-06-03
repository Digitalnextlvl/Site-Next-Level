import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Política de Privacidade - Next Level",
  description: "Política de Privacidade da Next Level - Como coletamos, usamos e protegemos seus dados",
}

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidade</h1>
            <p className="text-gray-300 text-lg">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. Informações Gerais</h2>
                <p className="text-gray-300 leading-relaxed">
                  A Next Level ("nós", "nosso" ou "empresa") está comprometida em proteger e respeitar sua privacidade.
                  Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações
                  quando você visita nosso site ou utiliza nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. Informações que Coletamos</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">2.1 Informações Fornecidas por Você</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Nome, e-mail e telefone quando você entra em contato conosco</li>
                      <li>Informações fornecidas em formulários de contato</li>
                      <li>Mensagens enviadas através do chat ou WhatsApp</li>
                      <li>Informações sobre sua empresa e necessidades de negócio</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">2.2 Informações Coletadas Automaticamente</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Endereço IP e localização geográfica</li>
                      <li>Tipo de navegador e dispositivo</li>
                      <li>Páginas visitadas e tempo de permanência</li>
                      <li>Cookies e tecnologias similares</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. Como Usamos suas Informações</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Responder às suas solicitações e fornecer suporte</li>
                  <li>Desenvolver e melhorar nossos serviços</li>
                  <li>Enviar comunicações relevantes sobre nossos serviços</li>
                  <li>Personalizar sua experiência em nosso site</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                  <li>Proteger nossos direitos e prevenir fraudes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Compartilhamento de Informações</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes
                  situações:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Com seu consentimento explícito</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Para proteger nossos direitos legais</li>
                  <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Segurança dos Dados</h2>
                <p className="text-gray-300 leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas
                  informações contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui
                  criptografia, controles de acesso e monitoramento regular de nossos sistemas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">6. Seus Direitos</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Confirmação da existência de tratamento de dados</li>
                  <li>Acesso aos seus dados pessoais</li>
                  <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                  <li>Anonimização, bloqueio ou eliminação de dados</li>
                  <li>Portabilidade dos dados</li>
                  <li>Eliminação dos dados tratados com consentimento</li>
                  <li>Revogação do consentimento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">7. Cookies</h2>
                <p className="text-gray-300 leading-relaxed">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site, analisar o
                  tráfego e personalizar conteúdo. Você pode controlar o uso de cookies através das configurações do seu
                  navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">8. Retenção de Dados</h2>
                <p className="text-gray-300 leading-relaxed">
                  Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas
                  nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">9. Alterações nesta Política</h2>
                <p className="text-gray-300 leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças
                  significativas através de nosso site ou por e-mail. Recomendamos que você revise esta política
                  regularmente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">10. Contato</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em
                  contato conosco:
                </p>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <ul className="text-gray-300 space-y-2">
                    <li>
                      <strong>E-mail:</strong> contato@nextlevel.com.br
                    </li>
                    <li>
                      <strong>Telefone:</strong> +55 (11) 97148-3647
                    </li>
                    <li>
                      <strong>Endereço:</strong> R. Abata, 13 - Jardim Flor da Montanha, Guarulhos, SP
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
