---
sidebar_position: 2
---
# 📋 PEGASUS Evidence Matrix Standard

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Genomic Identifiers
<Tabs>
  <TabItem value="variant" label="Variant information">
    <table className="peg-schema">
      <tr>
        <th>Column header</th>
        <th>Data format</th>
        <th>Description</th>
        <th>Requirement</th>
        <th>Example data</th>
      </tr>
      <tr>
        <td><b>Primary Variant ID</b></td>
        <td className="fmt">chr:bp:ref:alt</td>
        <td>The variant to which variant-centric evidence relates. Used as the primary row ID; may be a lead variant, a variant in LD, or a fine-mapped SNP (defined in metadata).</td>
        <td className="req req-mand">mandatory</td>
        <td className="ex">chr10:114754071:T:C</td>
      </tr>
      <tr>
        <td><b>rsID</b></td>
        <td className="fmt">rs[]</td>
        <td>The rsID of the primary variant.</td>
        <td className="req req-opt">optional</td>
        <td className="ex">rs1234</td>
      </tr>
      <tr>
        <td><b>VAR_[xyz]</b></td>
        <td className="fmt">bespoke</td>
        <td>Additional variant ID columns. Custom names must follow <span className="fmt">VAR_[xyz]</span> and be defined in the metadata file.</td>
        <td className="req req-opt">optional</td>
        <td className="ex">bespoke</td>
      </tr>
    </table>
  </TabItem>

  <TabItem value="gene" label="Gene information">
    <table className="peg-schema">
      <tr>
        <th>Column header</th>
        <th>Data format</th>
        <th>Description</th>
        <th>Requirement</th>
        <th>Example data</th>
      </tr>
      <tr>
        <td><b>Gene ID</b></td>
        <td className="fmt">ENSG[]</td>
        <td>The gene under consideration in this row (gene-centric evidence). Primary identifier must be the Ensembl Gene ID. Other IDs can be added using <span className="fmt">GENE_[xyz]</span> (e.g. <span className="fmt">GENE_EntrezID</span>).</td>
        <td className="req req-mand">mandatory (or)</td>
        <td className="ex">ENSG00000151532</td>
      </tr>
      <tr>
        <td><b>Gene symbol</b></td>
        <td className="fmt">HGNC</td>
        <td>The gene under consideration in this row. Primary symbol must be the HGNC-approved gene symbol. Alternative/legacy symbols may be provided via <span className="fmt">GENE_[xyz]</span> (e.g. <span className="fmt">GENE_alias</span>).</td>
        <td className="req req-mand">mandatory (or)</td>
        <td className="ex">VTI1A</td>
      </tr>
      <tr>
        <td><b>GENE_[xyz]</b></td>
        <td className="fmt">bespoke</td>
        <td>Additional gene-related columns (e.g. Entrez, aliases). Must be defined in metadata.</td>
        <td className="req req-opt">optional</td>
        <td className="ex">bespoke</td>
      </tr>
     </table>
  </TabItem>
  
  <TabItem value="locus" label="Locus information">
    <table className="peg-schema">
      <tr>
        <th>Column header</th>
        <th>Data format</th>
        <th>Description</th>
        <th>Requirement</th>
        <th>Example data</th>
      </tr>
      <tr>
        <td><b>Locus range</b></td>
        <td className="fmt">chr:pos:start-end</td>
        <td>The genomic range around the primary variant considered in this analysis.</td>
        <td className="req req-rec">recommended</td>
        <td className="ex">chr10:1000-2000</td>
      </tr>
      <tr>
        <td><b>Locus ID</b></td>
        <td className="fmt">any</td>
        <td>Internal or curated region ID. Recommended to use the associated variant (<span className="fmt">chr:bp</span> or <span className="fmt">rsID</span>); internal IDs may also be “Locus 1, Locus 2”.</td>
        <td className="req req-opt">optional</td>
        <td className="ex">chr10:114754071:T:C</td>
      </tr>
      <tr>
        <td><b>LOCUS_[xyz]</b></td>
        <td className="fmt">bespoke</td>
        <td>Additional locus-related columns. Must follow <span className="fmt">LOCUS_[xyz]</span> and be defined in metadata.</td>
        <td className="req req-opt">optional</td>
        <td className="ex">bespoke</td>
      </tr>
    </table>
  </TabItem>
</Tabs>

### Evidence — General Pattern
All variant-centric evidence columns are **optional**. However, we suggest to include at least **one** variant-centric evidence to support variant-gene relationship.

**We define a general reporting pattern:**
<table class="peg-schema">
  <thead>
    <tr>
      <th>Column header</th>
      <th>Data Format</th>
      <th>Description</th>
      <th>Requirement</th>
      <th>Example data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Category_[xyz]</code></td>
      <td class="fmt">Besopke</td>
      <td>Most headers follow the format <code>Category_(stream)_[xyz]</code>.<br/><br/>
      <strong>Category</strong> is mandatory; <br/><strong>stream</strong> is used only if it differs from the category;<br/>
      <code>[xyz]</code> can be any user-defined label.<br/><br/>
      e.g. <code>GWAS_pvalue</code>,
      <code>EXP_AdiposeTissue_TPM</code>,
      <code>QTL_eQTL_pancreas</code>,<code>TPWAS_TWAS_pvalue</code>. 
      The category must be from the [controlled list](../peg-evidence.md) and defined in the metadata file.</td>
      <td class="req req-opt">optional</td>
      <td>[variant-centric evidence examples](./peg-matrix-example.md#variant-centric-evidence-examples);<br/><br/>[gene-centric evidence examples](./peg-matrix-example.md#gene-centric-evidence-examples)</td>
    </tr>
   </tbody>
</table>

These are not strict requirements. Different categories may call for different types of data, and users can adapt them as needed. For guidance, we provide reference guidelines for the general evidence categories. Each category — [variant-centric](./peg-matrix-example.md#variant-centric-evidence-examples), [gene-centric](./peg-matrix-example.md#gene-centric-evidence-examples), comes with suggested naming patterns and example formats.

### Integration Evidence — General Pattern

<table class="peg-schema">
  <thead>
    <tr>
      <th>Column header</th>
      <th>Data Format</th>
      <th>Description</th>
      <th>Requirement</th>
      <th>Example data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>INT_[details]</code></td>
      <td class="fmt">Bespoke</td>
      <td>
        Headers may follow the format <code>INT_[details]</code> (or <code>INT</code> alone).<br/><br/>
        <strong>INT</strong> indicates integration evidence; <code>[details]</code> is a user-defined suffix when multiple integrations are reported.<br/><br/>
        For multi-word field names, use CamelCase (e.g., CredibleSetId).<br/><br/>
        Provenance and integration specifics can differ by row; capture them in the metadata file and, if they vary within the dataset, also in the data file.
      </td>
      <td class="req req-opt">optional</td>
      <td class="ex">[Integration evidence example](./peg-matrix-example.md)</td>
    </tr>
  </tbody>
</table>
