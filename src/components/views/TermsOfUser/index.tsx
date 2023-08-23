import Heading from '@/components/Heading'
import Informations from './Informations'

export default function TermsOfUse() {
  return (
    <article className="h-full bg-[#404040] px-[10%] text-center largerDesktop:px-[15%]">
      <Heading>Termos de uso</Heading>
      <div className="mb-10 mt-8 flex flex-col gap-6">
        <Informations title="Renovação automática">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
          velit eu ultricies consectetur, purus libero bibendum nunc, non
          egestas arcu mauris sed libero. Nunc id ex sit amet felis varius
          venenatis. Sed in dui vel est consequat hendrerit nec a dui. Vivamus
          quis metus eu elit viverra viverra. Curabitur finibus suscipit nulla,
          nec interdum justo malesuada id. Ut non risus a nulla malesuada
          commodo a nec justo. Fusce fringilla, odio at ultrices dignissim, mi
          odio dignissim urna, nec efficitur quam mi nec tellus. Quisque eu
          tellus nec urna aliquam finibus at nec erat. Sed non urna a ipsum
          consequat dictum. In hac habitasse platea dictumst. Sed a bibendum
          urna. Nunc consectetur urna id risus varius, a pulvinar sapien dictum.
        </Informations>
        <Informations title="Como cancelar">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
          velit eu ultricies consectetur, purus libero bibendum nunc, non
          egestas arcu mauris sed libero. Nunc id ex sit amet felis varius
          venenatis. Sed in dui vel est consequat hendrerit nec a dui. Vivamus
          quis metus eu elit viverra viverra. Curabitur finibus suscipit nulla,
          nec interdum justo malesuada id.
        </Informations>
        <Informations title="Preços">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
          velit eu ultricies consectetur, purus libero bibendum nunc, non
          egestas arcu mauris sed libero. Nunc id ex sit amet felis varius
          venenatis
        </Informations>
      </div>
    </article>
  )
}
