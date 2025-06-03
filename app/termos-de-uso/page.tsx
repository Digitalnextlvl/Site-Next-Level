import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Termos de Uso - Next Level",
  description: "Termos de Uso da Next Level - Condições para utilização de nossos serviços",
}

export default function TermosDeUso() {
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

            <h1 className="text-4xl md:text-5xl font-bold mb-6">Termos de Uso</h1>
            <p className="text-gray-300 text-lg">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. Aceitação dos Termos</h2>
                <p className="text-gray-300 leading-relaxed">
                  Ao acessar e usar o site da Next Level e nossos serviços, você concorda em cumprir e estar vinculado a
                  estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos
                  serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. Descrição dos Serviços</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A Next Level oferece serviços de desenvolvimento tecnológico, incluindo:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Desenvolvimento de sistemas e aplicativos</li>
                  <li>Criação de sites e e-commerce</li>
                  <li>Soluções de inteligência artificial</li>
                  <li>Automação de processos</li>
                  <li>Consultoria em tecnologia</li>
                  <li>Marketing digital</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. Uso Aceitável</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">3.1 Você concorda em:</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Usar nossos serviços apenas para fins legais e legítimos</li>
                      <li>Fornecer informações precisas e atualizadas</li>
                      <li>Manter a confidencialidade de suas credenciais de acesso</li>
                      <li>Respeitar os direitos de propriedade intelectual</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">3.2 Você concorda em NÃO:</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Usar nossos serviços para atividades ilegais ou não autorizadas</li>
                      <li>Tentar acessar sistemas ou dados não autorizados</li>
                      <li>Interferir no funcionamento normal dos serviços</li>
                      <li>Transmitir vírus, malware ou código malicioso</li>
                      <li>Violar direitos de terceiros</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Propriedade Intelectual</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Todo o conteúdo, design, código, logos e materiais em nosso site e serviços são de propriedade da Next
                  Level ou de nossos licenciadores e estão protegidos por leis de direitos autorais, marcas registradas
                  e outras leis de propriedade intelectual.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Os trabalhos desenvolvidos especificamente para clientes seguem os termos acordados em contrato
                  específico, respeitando os direitos de propriedade intelectual de ambas as partes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Contratos de Serviço</h2>
                <p className="text-gray-300 leading-relaxed">
                  Os serviços específicos são regidos por contratos individuais que detalham escopo, prazos, valores e
                  condições específicas. Estes Termos de Uso complementam, mas não substituem, os termos contratuais
                  específicos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">6. Pagamentos e Cancelamentos</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">6.1 Pagamentos</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Os preços são definidos em proposta comercial específica</li>
                      <li>Pagamentos devem ser realizados conforme cronograma acordado</li>
                      <li>Atrasos podem resultar em suspensão dos serviços</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">6.2 Cancelamentos</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Cancelamentos devem ser comunicados por escrito</li>
                      <li>Trabalhos já realizados serão cobrados proporcionalmente</li>
                      <li>Políticas específicas são definidas em contrato</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">7. Limitação de Responsabilidade</h2>
                <p className="text-gray-300 leading-relaxed">
                  Na máxima extensão permitida por lei, a Next Level não será responsável por danos indiretos,
                  incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros, dados ou uso, mesmo
                  que tenhamos sido avisados da possibilidade de tais danos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">8. Garantias</h2>
                <p className="text-gray-300 leading-relaxed">
                  Fornecemos nossos serviços "como estão" e "conforme disponíveis". Embora nos esforcemos para fornecer
                  serviços de alta qualidade, não garantimos que nossos serviços serão ininterruptos, livres de erros ou
                  atenderão a todos os seus requisitos específicos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">9. Confidencialidade</h2>
                <p className="text-gray-300 leading-relaxed">
                  Respeitamos a confidencialidade das informações de nossos clientes e esperamos o mesmo em relação às
                  nossas informações confidenciais. Acordos de confidencialidade específicos podem ser estabelecidos
                  para projetos sensíveis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">10. Modificações dos Termos</h2>
                <p className="text-gray-300 leading-relaxed">
                  Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em
                  vigor imediatamente após a publicação em nosso site. O uso continuado de nossos serviços após as
                  alterações constitui aceitação dos novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">11. Lei Aplicável</h2>
                <p className="text-gray-300 leading-relaxed">
                  Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais
                  competentes de Guarulhos, São Paulo, Brasil.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">12. Contato</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Para dúvidas sobre estes Termos de Uso, entre em contato conosco:
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
