---
sidebar_position: 3
hide_table_of_contents: true
---
# 💡 Illustrative Examples of Evidence Matrix Columns

The tables below show **examples** of how PEG evidence matrix columns can be named and formatted.  
These examples are **not mandatory fields** — they are provided to demonstrate recommended naming patterns, data formats, and reporting styles.  

- Projects may define additional or alternative columns as long as they follow the general conventions.  
- **Metadata should provide comprehensive information to understand the data type, provenance, and scale used for each column.**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="variant" label="Variant-centric evidence example" default>
    <table class="peg-schema">
      <thead>
        <tr>
          <th>Evidence Category</th>
          <th>Column header</th>
          <th>Data Format</th>
          <th>Description</th>
          <th>Requirement</th>
          <th>Example data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>GWAS</td>
          <td><code>GWAS_pvalue</code></td>
          <td class="fmt">Exponent or −log10</td>
          <td>P-value of the primary variant in the source GWAS. Specify whether exponent (e.g. <code>4×10⁻⁹</code>) or −log10 scale in the metadata file.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">4×10⁻⁹</td>
        </tr>
        <tr>
          <td>Proximity</td>
          <td><code>PROX_nearest_gene</code></td>
          <td class="fmt">boolean</td>
          <td>Indicates whether the variant is the nearest gene. Details on how distance is derived (e.g. to TSS, to gene footprint) should be documented in the metadata.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">N</td>
        </tr>
        <tr>
          <td>QTL</td>
          <td><code>QTL_eQTL_pancreas_pvalue</code></td>
          <td class="fmt">exponent or -log10</td>
          <td>Significance value for eQTL association in pancreas tissue.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">0.01</td>
        </tr>
        <tr>
          <td>QTL</td>
          <td><code>QTL_eQTL_pancreas_CI</code></td>
          <td class="fmt">range</td>
          <td>Confidence interval for the eQTL effect. Define confidence level (e.g. 95%) in metadata.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">[1.2, 2.5]</td>
        </tr>
        <tr>
          <td>Functional</td>
          <td><code>FUNC_CADD</code></td>
          <td class="fmt">float</td>
          <td>CADD functional prediction score. Specify genome build and release in the metadata.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">15.62</td>
        </tr>
        <tr>
          <td>Fine-mapping</td>
          <td><code>FM_credible_set_ID</code></td>
          <td class="fmt">string</td>
          <td>Identifier of the credible set variant from fine-mapping.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">chr10:114754071:T:C</td>
        </tr>
        <tr>
          <td>Fine-mapping</td>
          <td><code>FM_PIP</code></td>
          <td class="fmt">float</td>
          <td>Posterior inclusion probability (PIP) from fine-mapping.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">0.98</td>
        </tr>
        <tr>
          <td>Coloc</td>
          <td><code>COLOC_PPH4</code></td>
          <td class="fmt">float</td>
          <td>Colocalisation posterior probability that both traits share a causal variant (PPH4).</td>
          <td class="req req-opt">optional</td>
          <td class="ex">0.85</td>
        </tr>
      </tbody>
    </table>
  </TabItem>

  <TabItem value="gene" label="Gene-centric evidence example">
    <table class="peg-schema">
      <thead>
        <tr>
          <th>Evidence Category</th>
          <th>Column header</th>
          <th>Data Format</th>
          <th>Description</th>
          <th>Requirement</th>
          <th>Example data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TWAS</td>
          <td><code>TPWAS_TWAS_pvalue</code></td>
          <td class="fmt">float</td>
          <td>Transcriptome-wide association study (TWAS) p-value linking gene expression to trait.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">1×10⁻⁷</td>
        </tr>
        <tr>
          <td>Expression</td>
          <td><code>EXP_Adipose_TPM</code></td>
          <td class="fmt">float</td>
          <td>Expression level of the gene in adipose tissue, reported as Reads Per Million per Kilobase (RPMK) or Transcripts Per Million (TPM).</td>
          <td class="req req-opt">optional</td>
          <td class="ex">0.8</td>
        </tr>
        <tr>
          <td>Expression</td>
          <td><code>EXP_pancreas_TPM</code></td>
          <td class="fmt">float</td>
          <td>Expression level of the gene in pancreas tissue, reported as RPMK or TPM.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">—</td>
        </tr>
        <tr>
          <td>Perturbation</td>
          <td><code>PERTURB_mouse</code></td>
          <td class="fmt">Free text / ontology terms</td>
          <td>Observed phenotype in mouse perturbation models (e.g., knockout, overexpression). Terms can be free text or ontology labels, defined in metadata.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">hypoglycemia &#124; increased insulin secretion &#124; impaired glucose tolerance</td>
        </tr>
        <tr>
          <td>Knowledge</td>
          <td><code>KNOW</code></td>
          <td class="fmt">Narrative text</td>
          <td>Expert or knowledge-base curation describing gene function and its relationship to phenotype or disease.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">ANGPTL4 inhibits lipoprotein lipase (LPL), increasing circulating triglycerides and reducing fatty acid uptake.</td>
        </tr>
        <tr>
          <td>Literature</td>
          <td><code>LIT</code></td>
          <td class="fmt">Narrative text</td>
          <td>Human-curated evidence from published studies linking the gene to relevant traits or disease mechanisms.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">Zebrafish <i>Tcf7l2</i> mutant shows hyperglycemia, pancreatic and vascular defects, reduced regeneration.</td>
        </tr>
        <tr>
          <td>Literature</td>
          <td><code>LIT_PMID</code></td>
          <td class="fmt">PMID list</td>
          <td>PubMed identifiers (PMIDs) supporting literature evidence for the gene–trait association.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">PMID_28851992 &#124; PMID_31829936</td>
        </tr>
        <tr>
          <td>Drug</td>
          <td><code>DRUG</code></td>
          <td class="fmt">Drug name(s)</td>
          <td>Drug(s) known to target or modulate the gene, separated by <code>&#124;</code> (pipe). Reference databases (e.g., DrugBank) can be cited in metadata.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">METFORMIN &#124; CYCLOSPORINE</td>
        </tr>
      </tbody>
    </table>
  </TabItem>

  <TabItem value="integration" label="Integration example">
    <table class="peg-schema">
      <thead>
        <tr>
          <th>Column header</th>
          <th>Format</th>
          <th>Description</th>
          <th>Requirement</th>
          <th>Example data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>INT_pops</code></td>
          <td class="fmt">float</td>
          <td>Population count or weighted metric used in integration scoring. Define precise meaning and provenance in the metadata file.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">9</td>
        </tr>
        <tr>
          <td><code>INT_Combined_prediction_author_score</code></td>
          <td class="fmt">any</td>
          <td>Author-provided integrated prediction score. Units, scale, or categories (e.g. <code>STRONG</code>, <code>WEAK</code>) must be described in the metadata file.</td>
          <td class="req req-opt">optional</td>
          <td class="ex">STRONG</td>
        </tr>
      </tbody>
    </table>
  </TabItem>
</Tabs>