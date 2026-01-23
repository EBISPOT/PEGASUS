---
sidebar_position: 4
---

# PEG List

The PEG List is a concise summary of author-prioritised genes, linked transparently to the evidence used to reach that conclusion. It distils the PEG Evidence Matrix into a compact output that reports the top gene for each locus according to an author-designated integration stream.

## What the PEG List captures

- Shows the gene (identifier and symbol) that the authors consider most likely causal at each locus.
- Indicates which broad evidence categories were considered when reaching that conclusion, offering a fast overview of evidence types without describing direction or strength.
- Records the author’s chosen integration or scoring stream so that the selection logic is transparent and reproducible.

## How it is derived

Authors select the highest-ranked gene at each locus from the full Evidence Matrix using their specified integration approach (i.e. the method corresponding to the column labelled as `author_conclusion = TRUE`). The evidence and/or integration analyses supporting this conclusion are recorded in the PEG list, providing a clear link between the authors’ conclusion and the underlying evidence for reanalysis and benchmarking.

## Relationship to the Evidence Matrix

- The PEG List does **NOT** replace the Evidence Matrix; it communicates the author’s prioritisation in a compact, interpretable form.
- Users needing detailed or quantitative interpretation should refer to the underlying matrix, which retains all evaluated genes, evidence streams, and integration logic.
- Different user groups can work at the level that suits their needs: experimental or translational users may focus on the PEG List for hypothesis generation, while computational users may work directly with the matrix.

## Standard fields

<table class="peg-schema">
  <thead>
    <tr>
      <th>Column header</th>
      <th>Data format</th>
      <th>Description</th>
      <th>Requirement</th>
      <th>Example data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>variant_id</td>
      <td class="fmt">chr:pos:ref:alt</td>
      <td>Variant identifier</td>
      <td><span class="req req-mand">Mandatory</span></td>
      <td class="ex">chr10:114754071:T:C</td>
    </tr>
    <tr>
      <td>Gene symbol</td>
      <td class="fmt">HGNC</td>
      <td>HGNC gene symbol associated with the variant</td>
      <td><span class="req req-mand">Mandatory</span></td>
      <td class="ex">VTI1A</td>
    </tr>
    <tr>
      <td><span class="fmt">[Evidence_category_abbreviation]</span></td>
      <td class="fmt">boolean</td>
      <td>The column name represents an evidence category abbreviation from our [controlled vocabulary](./peg-evidence.md). <br/><br/>
      Values indicate whether or not evidence from this category was considered in the author conclusion integration analysis.</td>
      <td><span class="req req-mand">Mandatory</span></td>
      <td class="ex">TRUE</td>
    </tr>
    <tr>
      <td><span class="fmt">INT_Combined_prediction (author conclusion)</span></td>
      <td class="fmt">Bespoke<br/><br/>(Any data type, as long as it is used consistently within the column.)</td>
      <td>Integrated gene prioritisation outcome, derived from the integration column in the matrix with `author_conclusion = TRUE` in the metadata.</td>
      <td><span class="req req-mand">Mandatory</span></td>
      <td class="ex">Strong</td>
    </tr>
  </tbody>
</table>

## Example

<table class="peg-schema">
  <thead>
    <tr>
      <th>Primary Variant ID</th>
      <th>GeneSymbol (HGNC)</th>
      <th>GWAS</th>
      <th>PROX</th>
      <th>QTL</th>
      <th>FUNC</th>
      <th>FM</th>
      <th>COLOC</th>
      <th>TPWAS</th>
      <th>EXP</th>
      <th>PERTURB</th>
      <th>KNOW</th>
      <th>LIT</th>
      <th>DRUG</th>
      <th>INT_Combined prediction (author score)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="fmt">chr1:100000:T:C</td>
      <td>VTI1A</td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="GWAS present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="PROX present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="QTL present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="FUNC present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="FM present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="COLOC present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="TPWAS present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="EXP present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="PERTURB present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="KNOW present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="LIT present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="DRUG present" /></td>
      <td class="fmt">STRONG</td>
    </tr>
    <tr>
      <td class="fmt">chr2:20000:A:G</td>
      <td>ABO</td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="GWAS present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="PROX present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="QTL present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="FUNC present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="FM present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="COLOC present" /></td>
      <td class="chk"><input type="checkbox" disabled aria-label="TPWAS present" /></td>
      <td class="chk"><input type="checkbox" checked disabled aria-label="EXP present" /></td>
      <td class="chk"><input type="checkbox" disabled aria-label="PERTURB present" /></td>
      <td class="chk"><input type="checkbox" disabled aria-label="KNOW present" /></td>
      <td class="chk"><input type="checkbox" disabled aria-label="LIT present" /></td>
      <td class="chk"><input type="checkbox" disabled aria-label="DRUG present" /></td>
      <td class="fmt">MODERATE</td>
    </tr>
  </tbody>
</table>
Tick = data present. Blank = not assessed. Ticks do NOT imply supportive vs negative.
