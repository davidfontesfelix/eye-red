import Heading from '@/components/Heading'
import { CardRoot } from './Card'

export default function ApplicationInformation() {
  return (
    <section className="flex h-full w-full flex-col items-center bg-[#151515] text-white">
      <Heading>A segurança perfeita não existe?</Heading>
      <div className="cards mb-16 mt-12 flex flex-wrap gap-12 tablet:flex-col">
        <CardRoot.Card>
          <CardRoot.Title>Equipe de hackers</CardRoot.Title>
          <CardRoot.Paragraph>
            <b>Equipe formada por hackers?</b> Somos uma empresa independente
            onde a sua segurança é a maior prioridade. Nosso laboratório de
            testes ajuda a mantê-lo sempre atualizado sobre cada novo vírus na
            internet.
          </CardRoot.Paragraph>
        </CardRoot.Card>
        <CardRoot.Card>
          <CardRoot.Title>VPN</CardRoot.Title>
          <CardRoot.Paragraph>
            <b>O que uma VPN faz?</b> Uma VPN é uma forma eficaz e fácil de
            proteger o tráfego na Internet e manter a privacidade online. Ao
            conectar-se a um servidor VPN seguro, seu tráfego passa por um túnel
            criptografado, tornando-o invisível para hackers, governos e
            provedores de Internet.
          </CardRoot.Paragraph>
        </CardRoot.Card>
        <CardRoot.Card>
          <CardRoot.Title>Protegemos dados</CardRoot.Title>
          <CardRoot.Paragraph>
            <b>Como protegemos seus dados?</b> Quando ocorre algum vazamento de
            banco de dados, verificamos o mais rápido possível e caso seus dados
            estejam registrados em nosso sistema, avisamos você. Sua segurança é
            a nossa maior prioridade.
          </CardRoot.Paragraph>
        </CardRoot.Card>
      </div>
    </section>
  )
}
