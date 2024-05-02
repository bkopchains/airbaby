export function LoremIpsum({ repeat = 1 }: { repeat?: number }) {
  return (
    <>
      <article>
        {Array.from({ length: repeat }, (_, i) => (
          <div key={i}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac rhoncus quam.
            </p>
            <p>
              Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
              imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
              Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut
              felis blandit, at iaculis odio ultrices. Nulla facilisi.
              Vestibulum cursus ipsum tellus, eu tincidunt neque tincidunt a.
            </p>
            <h2>Sub-header</h2>
            <p>
              In eget sodales arcu, consectetur efficitur metus. Duis efficitur
              tincidunt odio, sit amet laoreet massa fringilla eu.
            </p>
            <p>
              Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
              Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus
              arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.
            </p>
            <p>
              Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
            </p>
            <p>
              Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
              pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut
              suscipit leo.
            </p>
          </div>
        ))}
      </article>
    </>
  );
}
