<script lang="ts">
	import FullWidthSection from '$lib/layout/FullWidthSection.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import { Hx, HxBoundary } from '$lib/uberschrift';
	import franziUndLeni from './franzi-und-leni.webp';
</script>

<PageLayout>
	<FullWidthSection padding="none">
		<section class="ful-header !col-[full-width] p-32 bg-gradient-to-b from-backgroundGreen from-50% to-backgroundBeige relative">
            <img src={franziUndLeni} alt="Franzi und Leni" class="absolute max-h-full right-0" />
			<Hx class="font-bold font-headline text-5xl z-10 drop-shadow-bold text-white">Alpenabenteuer mit Franzi und Leni</Hx>
		</section>
	</FullWidthSection>
	<FullWidthSection>
		<article class="prose">
			<HxBoundary>
				<p>
					Franzi und Leni sind zwei unerschrockene junge Frauen, die ganz Bayern unsicher machen.
					Leni, bekannt als die "Lederhosen-Legende", ist abenteuerlustig und tief verwurzelt in den
					Traditionen der Alpen. Sie liebt es, durch die Berge zu streifen, neue Orte zu entdecken
					und dabei stets ihre geliebten Lederhosen zu tragen. Ihre fröhliche und offene Art hat sie
					schnell zu einer Legende gemacht, die von vielen bewundert wird.
				</p>

				<p>
					Franzi, die "Dirndl-Diva", steht ihr in nichts nach. Sie liebt das bayerische Brauchtum
					ebenso sehr wie Leni, allerdings in ihrer eigenen, eleganten Art. Stets im bunten Dirndl
					unterwegs, kennt sie sich bestens mit den Geheimnissen und Traditionen Bayerns aus. Franzi
					kombiniert Stil und Tradition auf eine Art, die sie zu einer echten Ikone macht, doch
					hinter ihrer charmanten Fassade verbirgt sich eine tiefe Rivalität gegenüber Leni.
				</p>

				<p>
					Zusammen sind sie in ganz Bayern unterwegs – mal als Rivalinnen, mal als Weggefährtinnen.
					Ihre Geschichten sind an vielen Orten versteckt: in den Bergen, auf Volksfesten, in
					kleinen Dörfern oder tief im Wald. Überall kann man Hinweise auf ihre Abenteuer finden,
					und so manch ein Geheimnis wartet darauf, gelüftet zu werden.
				</p>

				<p>
					Halte also deine Augen und Ohren offen, wenn du durch Bayern reist – vielleicht entdeckst
					du eine Spur von Franzi und Leni und erfährst mehr über ihre unglaublichen Abenteuer!
				</p>
			</HxBoundary>
		</article>
	</FullWidthSection>
	<FullWidthSection>
		<section class="grid gap-8">
			<details class="p-4 border rounded shadow-lg bg-backgroundBeige">
				<summary class="flex flex-wrap">
					<Hx class="font-bold">Wer sind Franzi und Leni?</Hx>
				</summary>

				<HxBoundary>
					<p>
						Franzi und Leni sind zwei junge Frauen, die eine besondere Verbindung zur bayerischen
						Tradition haben. Leni ist als die "Lederhosen-Legende" bekannt, während Franzi den Titel
						der "Dirndl-Diva" trägt. Beide sind Abenteurerinnen, die die Alpen und das bayerische
						Brauchtum lieben, aber ihre Rivalität sorgt oft für Spannungen zwischen ihnen.
					</p>
				</HxBoundary>
			</details>
			<details class="p-4 border rounded shadow-lg bg-backgroundBeige">
				<summary class="flex flex-wrap">
					<Hx class="font-bold">Warum hasst Franzi Leni?</Hx>
				</summary>

				<HxBoundary>
					<p>
						Franzi empfindet eine tiefe Rivalität gegenüber Leni, die auf Eifersucht und
						Missverständnissen basiert. Leni ist bekannt und beliebt als die "Lederhosen-Legende",
						was Franzi das Gefühl gibt, im Schatten zu stehen. Diese Gefühle haben sich über die
						Zeit angestaut und zu einer regelrechten Abneigung entwickelt.
					</p>
				</HxBoundary>
			</details>
			<details class="p-4 border rounded shadow-lg bg-backgroundBeige">
				<summary class="flex flex-wrap">
					<Hx class="font-bold">Wie kam es dazu, dass Leni zur Lederhosen-Legende wurde?</Hx>
				</summary>

				<HxBoundary>
					<p>
						Leni wurde zur "Lederhosen-Legende" durch ihre Abenteuerlust und ihre tiefe
						Verbundenheit mit der bayerischen Tradition. Sie wanderte in Lederhosen durch die Alpen,
						besuchte Volksfeste und begeisterte Menschen mit ihrem Charme und ihrer Freude an der
						Kultur. Ihre unerschrockenen Abenteuer und ihre liebevolle Art machten sie schließlich
						zur Legende.
					</p>
				</HxBoundary>
			</details>
			<details class="p-4 border rounded shadow-lg bg-backgroundBeige">
				<summary class="flex flex-wrap">
					<Hx class="font-bold">Wieso nennt man Franzi die Dirndl-Diva?</Hx>
				</summary>

				<HxBoundary>
					<p>
						Franzi wurde zur "Dirndl-Diva", weil sie stets das traditionelle Dirndl trägt und es
						liebt, bayerische Kultur auf eine elegante Weise zu präsentieren. Sie ist bekannt für
						ihre Vorliebe für Blumenmuster, ihren Sinn für Mode und ihre Fähigkeit, die Traditionen
						mit moderner Eleganz zu verbinden. Diese Kombination macht sie zu einer Art Symbol für
						die moderne bayerische Frau.
					</p>
				</HxBoundary>
			</details>
			<details class="p-4 border rounded shadow-lg bg-backgroundBeige">
				<summary class="flex flex-wrap">
					<Hx class="font-bold">Was hat Detlef mit der ganzen Sache zu tun?</Hx>
				</summary>

				<HxBoundary>
					<p>
						Detlef ist ein mysteriöser Wrestler, der in die Geschichte von Franzi und Leni
						hineingezogen wurde. Er tauchte auf, als die Rivalität zwischen den beiden Frauen
						eskalierte, und half ihnen, nachdem sie verletzt wurden. Detlef wurde von einer Fee aus
						den Alpen verzaubert und spielt die Rolle des unerwarteten Helden, der versucht,
						zwischen den beiden zu vermitteln und Frieden zu stiften.
					</p>
				</HxBoundary>
			</details>
		</section>
	</FullWidthSection>
</PageLayout>

<style lang="postcss">
	.ful-header {
		display: grid;
		grid-template-columns: inherit;
		grid-column: full-width;
	}
	.ful-header > :global(*) {
		grid-column: content;
	}</style>
