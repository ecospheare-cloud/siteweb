import {readFile} from 'node:fs/promises';
const system=JSON.parse(await readFile(new URL('../design/infographies/system.json',import.meta.url),'utf8'));
const [subject,...description]=process.argv.slice(2);
if(!subject){console.error('Usage: npm run art:brief -- acquisition | conversion | suivi | mesure | nouveau-sujet "Description précise du mécanisme"');process.exit(1)}
const scene=description.join(' ')||system.subjects[subject];
if(!scene){console.error('Sujet inconnu. Ajoutez une description concrète du mécanisme à représenter.');process.exit(1)}
console.log(`Use case: ${system.useCase}\nAsset type: ECOSPHEARE static explanatory infographic, ${system.format}\nSubject: ${scene}\nArt direction: ${system.invariants.join('. ')}\nPalette: ${JSON.stringify(system.palette)}\nAvoid: ${system.avoid.join(', ')}\nNo labels inside image. Semantic labels will be HTML. Original conceptual art, not customer proof.`);
