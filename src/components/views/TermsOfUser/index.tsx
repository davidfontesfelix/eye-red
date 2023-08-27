import Heading from '@/components/Heading'
import Informations from './Informations'

export default function TermsOfUse() {
  return (
    <article className="h-full bg-[#404040] px-[10%] text-center largerDesktop:px-[15%]">
      <Heading>Termos de uso</Heading>
      <div className="mb-10 mt-8 flex flex-col gap-6">
        <Informations title="Renovação automática">
          Ao adquirir uma assinatura do EyeRed Antivírus, você concorda com a
          renovação automática da sua assinatura no final do período contratado.
          Isso garante a continuidade da proteção fornecida pelo EyeRed sem
          interrupções. A renovação automática será processada utilizando os
          detalhes de pagamento fornecidos durante a aquisição inicial.
        </Informations>
        <Informations title="Cancelamento da Renovação Automática">
          Se desejar cancelar a renovação automática de sua assinatura, você
          pode fazê-lo a qualquer momento antes da data de renovação. Para
          cancelar, acesse sua conta no site do EyeRed Antivírus, vá para a
          seção de gerenciamento de assinaturas e siga as instruções de
          cancelamento. Lembre-se de que o cancelamento da renovação automática
          não afetará o acesso aos serviços até o final do período contratado.
        </Informations>
        <Informations title="Preços e Pagamentos">
          Os preços dos nossos produtos e serviços estão claramente indicados em
          nosso site. Eles podem variar com base na oferta, período de
          assinatura e recursos incluídos. Ao realizar um pedido, você concorda
          em pagar o valor indicado, além de quaisquer impostos ou taxas
          aplicáveis. Os pagamentos serão processados usando os métodos de
          pagamento disponíveis no site.
        </Informations>
      </div>
    </article>
  )
}
