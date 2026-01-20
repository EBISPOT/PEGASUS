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
        <td>Is the variant to which variant-centric evidence relates. Is the primary row ID. Primary variant may be lead variant, variant in LD with lead, or fine mapped SNPs at locus - this should be defined in the metadata file.</td>
        <td className="req req-mand">Mandatory</td>
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
        <td><b>Var_[xyz]</b></td>
        <td className="fmt">bespoke</td>
        <td>Other columns relating to variant identification may be added, we recommend using the format <span className="fmt">VAR_[xyz]</span> and should be defined in the metadata file.</td>
        <td className="req req-opt">Optional</td>
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
        <td>The gene under consideration in this row (gene-centric evidence). The Ensembl Gene ID is recommended as the primary identifier. Other IDs can be added using <span className="fmt">GeneID_[SOURCE]</span> (e.g. <span className="fmt">GeneID_EntrezID</span>).</td>
        <td className="req req-mand">Mandatory</td>
        <td className="ex">ENSG00000151532</td>
      </tr>
      <tr>
        <td><b>Gene symbol</b></td>
        <td className="fmt">HGNC</td>
        <td>The gene under consideration in this row, to which gene centric evidence relates. HGNC Symbol is recommended as the primary gene symbol identifier. Alternative/legacy symbols may be provided via <span className="fmt">GeneSymbol_[SOURCE]</span> (e.g. <span className="fmt">GeneSymbol_alias</span>).</td>
        <td className="req req-mand">Mandatory</td>
        <td className="ex">VTI1A</td>
      </tr>
      <tr>
        <td><b>Gene_[xyz]</b></td>
        <td className="fmt">bespoke</td>
        <td>Additional gene-related columns (e.g. Entrez, aliases). Must be defined in metadata.</td>
        <td className="req req-opt">Optional</td>
        <td className="ex">Bespoke</td>
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
        <td>The range around the primary variant considered in this analysis.</td>
        <td className="req req-rec">Recommended</td>
        <td className="ex">chr10:1000-2000</td>
      </tr>
      <tr>
        <td><b>Locus ID</b></td>
        <td className="fmt">any</td>
        <td> An internal or curated ID for the region considered. We recommend the associated variant  (<span className="fmt">chr:bp</span> or <span className="fmt">rsID</span>); internal IDs may be e.g. 'Locus 1, Locus 2'.</td>
        <td className="req req-opt">Optional</td>
        <td className="ex">chr10:114754071:T:C</td>
      </tr>
      <tr>
        <td><b>Locus_[xyz]</b></td>
        <td className="fmt">bespoke</td>
        <td>Other columns relating to the gene may be added, we recommend using the header format <span className="fmt">Locus_[xyz]</span>, and should be defined in the metadata file.</td>
        <td className="req req-opt">Optional</td>
        <td className="ex">bespoke</td>
      </tr>
    </table>
  </TabItem>
</Tabs>

### Evidence — General Pattern
All variant-centric evidence columns are **optional**. However, PEGSUS suggest to include at least **TWO** evidence to support variant-gene-phenotype relationship.

**PEGSUS define a general reporting pattern:**
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
      <td><code>{`Category_(stream)_[details]`}</code></td>
      <td class="fmt">Bespoke</td>
      <td>Headers follow the format <code>Category_(stream)_[details]</code>, these should be defined in the metadata file. Use the abbreviated category name (from the [evidence categories listed](../peg-evidence.md) in controlled list). Stream is required only if multiple evidence streams within a single category are used. See examples.<br/><br/>
      For field names consisting of multiple words, please use CamelCase. For example, credible set id should be written as CredibleSetId.<br/><br/> If no category in the list are applicable, please use `Other_[CustomisedCategory]_(stream)_[details]`</td>
      <td class="req req-opt">Optional</td>
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
      <td><code>INT_[tag]_[details]</code></td>
      <td class="fmt">Bespoke</td>
      <td>
        Headers may follow the format <code>INT_[tag]_[details]</code>.<br/><br/>
        <strong>INT</strong> indicates integration evidence; where `[tag]` is customised lable in the metadata; <code>[details]</code> is a user-defined suffix when multiple integrations are reported.<br/><br/>
        For multi-word field names, use CamelCase (e.g., CredibleSetId).<br/><br/>
        Provenance and integration specifics can differ by row; capture them in the metadata file and, if they vary within the dataset, also in the data file.
      </td>
      <td class="req req-opt">Optional</td>
      <td class="ex">[Integration evidence example](./peg-matrix-example.md)</td>
    </tr>
  </tbody>
</table>
