use strict;
use warnings;
use utf8;

my $teaser = q~<section class="blog-teaser" aria-labelledby="blog-teaser-title"><div class="blog-teaser__head"><div><p class="blog-teaser__eyebrow">Nos derniers conseils</p><h2 id="blog-teaser-title">Découvrez nos blogs.</h2></div><a class="blog-teaser__all" href="/blog.html">Voir tous les articles ↗</a></div><div class="blog-teaser__grid"><a class="blog-teaser__card" href="/article-seo-erreurs.html"><img src="/assets/blog-seo-erreurs-cobalt.webp" alt="Une loupe examine un maillon brisé sur une barre de recherche." loading="lazy" decoding="async"><span class="blog-teaser__body"><span class="blog-teaser__tag">SEO</span><h3>5 erreurs SEO qui coûtent des clients</h3><span class="blog-teaser__read">Lire l’article →</span></span></a><a class="blog-teaser__card" href="/article-geo.html"><img src="/assets/blog-geo-ia-cobalt.webp" alt="Des documents sources alimentent une bulle de réponse bleu cobalt." loading="lazy" decoding="async"><span class="blog-teaser__body"><span class="blog-teaser__tag">GEO</span><h3>Comment apparaître dans les réponses des IA</h3><span class="blog-teaser__read">Lire l’article →</span></span></a><a class="blog-teaser__card" href="/article-strategie.html"><img src="/assets/blog-strategie-digitale-cobalt.webp" alt="Un itinéraire relie trois étapes à un drapeau d’arrivée." loading="lazy" decoding="async"><span class="blog-teaser__body"><span class="blog-teaser__tag">Stratégie</span><h3>Créer sa stratégie digitale avec des priorités claires</h3><span class="blog-teaser__read">Lire l’article →</span></span></a></div></section>~;

my @files = `git ls-files --cached --others --exclude-standard '*.html'`;
for my $name (@files) {
  chomp $name;
  next unless -f $name;
  open my $in, '<:encoding(UTF-8)', $name or die "$name: $!";
  local $/;
  my $html = <$in>;
  close $in;
  next unless $html =~ m{</main>\s*<footer\b};
  my $before = $html;
  $html =~ s{<section class="blog-teaser"[^>]*>.*?</section>}{}gs;
  $html =~ s{</main>(\s*<footer\b)}{$teaser</main>$1};
  next if $before eq $html;
  open my $out, '>:encoding(UTF-8)', $name or die "$name: $!";
  print {$out} $html;
  close $out;
}
