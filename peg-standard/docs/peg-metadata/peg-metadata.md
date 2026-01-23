---
sidebar_position: 2
hide_table_of_contents: true
---

# 📋 PEG Metadata Standard

The metadata consists of **four primary components**:
- Dataset Description: descriptors for the whole PEG matrix (trait, source of the GWAS data and publication reference)
- Genomic Identifiers: details about the variants, genes, or locus included in your dataset.
- Evidence: explains the evidence columns and their associated categories, and links provenance and analysis methods via source_tag and method_tag.
- Integration: information about what and how different streams of evidence are combined. 

In addition, there are **two modular components**:
- Source: citation and provenance information for each evidence stream, including publications, databases, and biosample details.
- Method: a description of the methodology, pipelines, or softwares used to generate the data.

These modular components can be referenced by multiple evidence entries.

Detailed descriptions of each component are provided in the corresponding tabs below:

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Standard Content
<Tabs queryString="peg-metadata-tab">
<TabItem value="dataset-description" label="📂 Dataset description">
       <table class="peg-schema">
         <thead>
            <tr>
               <th>Field</th>
               <th>Description</th>
               <th>Requirement</th>
               <th>Data_format</th>
               <th>Example</th>
               </tr>
          </thead>
          <tbody>
            <tr>
              <td>peg_source</td>
              <td>Identifier of the origin of the PEG list (e.g., publication, DOI, preprint, URL).</td>
              <td><span class="req req-rec">Recommended</span></td>
              <td class="fmt">string (PMID, DOI, URL)</td>
              <td class="ex">PMID:36357675</td>
            </tr>
            <tr>
              <td>trait_description</td>
              <td>Free-text description of the phenotype under investigation. Should be concise but clear to a non-specialist. Avoid abbreviations.</td>
              <td><span class="req req-mand">Mandatory</span></td>
              <td class="fmt">string</td>
              <td class="ex">Ascorbic acid 3-sulfate levels</td>
            </tr>
            <tr>
              <td>trait_ontology_id</td>
              <td>Standard ontology identifier mapped to the trait (e.g., EFO, MONDO, HPO, DOID). Use the most specific term available.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">EFO_0800173</td>
            </tr>
            <tr>
              <td>gwas_source</td>
              <td>Identifier of the GWAS source. Prefer GWAS Catalog accession (GCST); if not available, use PubMed ID or another recognised accession.</td>
              <td><span class="req req-rec">Recommended</span></td>
              <td class="fmt">string(GCST[0-9]+, PMID, other accession ID)</td>
              <td class="ex">GCST000001</td>
            </tr>
            <tr>
              <td>gwas_sample_description</td>
              <td>Only required if <code>gwas_source</code> is not a GWAS Catalog accession. Detailed description of the GWAS samples (e.g., cohort name, case/control numbers, ancestry).</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">6,136 Finnish ancestry individuals</td>
            </tr>
            <tr>
                <td>gwas_sample_size</td>
                <td>Only required if <code>gwas_source</code> is not a GWAS Catalog accession. Total number of individuals included in the GWAS analysis.</td>
                <td><span class="req req-opt">Optional</span></td>
                <td class="fmt">integer</td>
                <td class="ex">6136</td>
            </tr>
            <tr>
                <td>gwas_case_control_study</td>
                <td>Only required if <code>gwas_source</code> is not a GWAS Catalog accession. Indicator of whether the GWAS design is case–control (TRUE) or quantitative/other (FALSE).</td>
                <td><span class="req req-opt">Optional</span></td>
                <td class="fmt">boolean</td>
                <td class="ex">FALSE</td>
            </tr>
            <tr>
                <td>gwas_sample_ancestry</td>
                <td>Only required if <code>gwas_source</code> is not a GWAS Catalog accession. Free-text description of participant ancestry, as reported in the original study.</td>
                <td><span class="req req-opt">Optional</span></td>
                <td class="fmt">string</td>
                <td class="ex">Finnish</td>
            </tr>
            <tr>
                <td>gwas_sample_ancestry_label</td>
                <td>Harmonised ancestry label appropriate for the sample. For label definitions, see Morales et al., 2018 (Table 1). Only required if <code>gwas_source</code> is not a GWAS Catalog accession.</td>
                <td><span class="req req-opt">Optional</span></td>
                <td class="fmt">string (controlled vocabulary)</td>
                <td class="ex">European</td>
            </tr>
           </tbody>
         </table> 
  </TabItem>

  <TabItem value="genomic-identifier" label="🧬 Genomic Identifier">
        <table class="peg-schema">
          <thead>
            <tr>
              <th>Field</th>
              <th>Description</th>
              <th>Requirement</th>
              <th>Data_format</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>variant_type</td>
              <td>Explanation of how the main variant was selected (e.g., lead, sentinel, index, mixed).</td>
              <td><span class="req req-rec">Recommended</span></td>
              <td class="fmt">string</td>
              <td class="ex">lead</td>
            </tr>
            <tr>
              <td>variant_information</td>
              <td>Additional free-text notes about the variant (e.g., selection method, quality thresholds, imputation info).</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">Select variant with lowest p-value at locus among three GWAS studies</td>
            </tr>
            <tr>
              <td>genome_build</td>
              <td>Genome assembly used to map variants.</td>
              <td><span class="req req-mand">Mandatory</span></td>
              <td class="fmt">GRCh38, GRCh37, NCBI36, NCBI35, NCBI34</td>
              <td class="ex">GRCh38</td>
            </tr>
            <tr>
              <td>gene_id_source_version</td>
              <td>Version of the gene identifier source (e.g., Ensembl release).</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">Ensembl v109</td>
            </tr>
            <tr>
              <td>gene_symbol_source_version</td>
              <td>Version of the gene symbol reference authority (e.g., HGNC release).</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">HGNC 2025-07-30</td>
            </tr>
            <tr>
              <td>gene_info</td>
              <td>Additional gene-level metadata that supports interpretation.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">/</td>
            </tr>
            <tr>
              <td>locus_type</td>
              <td>Method used to define locus boundaries (e.g., LD region, ±500kb window, fine-mapped credible set).</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">LD</td>
            </tr>
            <tr>
              <td>locus_id</td>
              <td>Provide the explanation of how the identifier was derived (e.g., lead SNP rsID, cytoband).</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">lead SNP rsID</td>
            </tr>
            <tr>
              <td>locus_info</td>
              <td>Additional information supporting locus interpretation (e.g., recombination hotspot boundaries, fine-mapping method).</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">Defined as ±500 kb around lead SNP</td>
            </tr>
          </tbody>
        </table>
  </TabItem>

  <TabItem value="evidence" label="🔎 Evidence">
    <table class="peg-schema">
      <thead>
        <tr>
          <th>Field</th>
          <th>Description</th>
          <th>Requirement</th>
          <th>Data_format / Allowed values</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>evidence_stream_tag</td>
          <td>Specific analysis stream within the evidence category.</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">string (e.g. eQTL, pQTL, sQTL, TWAS, PWAS etc.)</td>
          <td class="ex">eQTL-pancreas</td>
        </tr>
        <tr>
          <td>evidence_category</td>
          <td>Full evidence category name from the [controlled list](../peg-evidence.md).</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">[Controlled vocabulary](../peg-evidence.md)</td>
          <td class="ex">Molecular QTL</td>
        </tr>
        <tr>
          <td>evidence_category_abbreviation</td>
          <td>Short label assigned from the [controlled list](../peg-evidence.md) of evidence categories.</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">[Controlled vocabulary](../peg-evidence.md)</td>
          <td class="ex">QTL</td>
        </tr>
        <tr>
          <td>variant_or_gene_centric</td>
          <td>Indicates whether the evidence originates from variant-level or gene-level analysis.</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">`variant-centric` or `gene-centric`</td>
          <td class="ex">variant-centric</td>
        </tr>
        <tr>
          <td>source_tag</td>
          <td>Identifier for the data source, created in the **[`source tab`](./peg-metadata.md?peg-metadata-tab=source#standard-content)**.</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt"> string (preferred: lowercase with underscores)</td>
          <td class="ex">source_gtex_pancreas</td>
        </tr>
        <tr>
          <td>method_tag</td>
          <td>Identifier for the analysis method, created in the **[`method tab`](./peg-metadata.md?peg-metadata-tab=method#standard-content)**.</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">string (preferred: lowercase with underscores)</td>
          <td class="ex">method_fastqtl</td>
        </tr>
        <tr>
          <td>threshold</td>
          <td>Threshold applied to define significance or inclusion criteria.</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">logical expression / numeric cutoff</td>
          <td class="ex">&lt; 0.05</td>
        </tr>
        <tr>
          <td>note</td>
          <td>Additional free text clarifications to aid interpretation.</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">string</td>
          <td class="ex">Adjusted for covariates (age, sex, BMI)</td>
        </tr>
        <tr>
          <td>column_header</td>
          <td>Unique column name used in the PEG evidence matrix. Should follow a consistent naming convention.</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">any, suggest category_stream_[xyz]</td>
          <td class="ex">QTL_eQTL-pancreas_pvalue</td>
        </tr>
        <tr>
          <td>column_description</td>
          <td>Free text explanation of the content in this column.</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">string</td>
          <td class="ex">p-value from eQTL analysis in pancreas tissue</td>
        </tr>
      </tbody>
    </table>
  </TabItem>

  <TabItem value="integration" label="🔗 Integration">
    <table class="peg-schema">
      <thead>
        <tr>
          <th>Field</th>
          <th>Description</th>
          <th>Requirement</th>
          <th>Data_format / Allowed values</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>integration_tag</td>
          <td>Author-assigned intregration analysis name that can be cited as evidence in the integrated_analysis_name field.</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">string</td>
          <td class="ex">pops</td>
        </tr>
        <tr>
          <td>evidence_streams_included</td>
          <td>A list of variant-centric or gene-centric evidence stream names combined in the integration.</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">List of controlled terms, separated by “|”</td>
          <td class="ex">FUNC &#124; eQTL &#124; pQTL &#124; FM &#124; 3D &#124; PHEWAS &#124; TWAS</td>
        </tr>
        <tr>
          <td>integrations_included</td>
          <td>A list of integration_tag values from other integration analyses that are included in this integration analysis.</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">List of integration tags, separated by “|”</td>
          <td class="ex"> pops &#124; flame</td>
        </tr>
        <tr>
          <td>method_tag</td>
          <td>Identifier for the analysis method (from Method tab).</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">string (preferred: lowercase with underscores)</td>
          <td class="ex">soft_pops</td>
        </tr>
        <tr>
          <td>threshold</td>
          <td>Threshold applied to define significance or inclusion criteria.</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">logical expression / numeric cutoff</td>
          <td class="ex">&gt; 3</td>
        </tr>
        <tr>
          <td>note</td>
          <td>Extra details to aid interpretation.</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">string</td>
          <td class="ex">Weighted by tissue-specific relevance</td>
        </tr>
        <tr>
          <td>column_header</td>
          <td>Column name in the PEG evidence matrix.</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">string (format: INT_[integration_tag]_[descriptor])</td>
          <td class="ex">INT_pops</td>
        </tr>
        <tr>
          <td>column_description</td>
          <td>Explanation of the content in this column.</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">string</td>
          <td class="ex">Integrated score for prioritised gene using PoPS (gene prioritisation method combining GWAS signals, expression, pathways, and PPI data).</td>
        </tr>
        <tr>
          <td>author_conclusion</td>
          <td>Indicates when values in this column reflect the authors’ conclusions for defining the PEG list. <br/>
          NOTE: only **ONE** column per matrix can be assiged as `True`. PEGASUS recommend including the string 'author_conclusion' in the appropirate column header.</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">Boolean (True / False)</td>
          <td class="ex"> True </td>
        </tr>
      </tbody>
    </table>
  </TabItem>

  <TabItem value="source" label="📚 Source">
    If a `source_tag` is used for any evidence, please follow the requirements for each attribute in the source entity to provide more details. If that’s not applicable, feel free to skip this entity.
    <Tabs>
      <TabItem value="provenance" label="Provenance">
        <table class="peg-schema">
          <thead>
            <tr>
              <th>Field</th>
              <th>Description</th>
              <th>Requirement</th>
              <th>Data_format / Allowed values</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>source_tag</td>
              <td>Unique identifier for the source, this tag is referenced in the [evidence metadata](./peg-metadata.md?peg-metadata-tab=evidence##standard-content) and [integration metadata](./peg-metadata.md?peg-metadata-tab=integration##standard-content).</td>
              <td><span class="req req-mand">Mandatory</span></td>
              <td class="fmt">any (preferred: lowercase with underscores)</td>
              <td class="ex">source_gtex_pancreas</td>
            </tr>
            <tr>
              <td>provenance</td>
              <td>Project, database, or lab providing the data.</td>
              <td><span class="req req-mand">Mandatory</span></td>
              <td class="fmt">string</td>
              <td class="ex">
              • Use <code>lab_internal</code> for unpublished data generated by your lab.<br/>
              • Use <code>publication</code> for published data not deposited in a repository.<br/>
              • Use the official name of the resource (e.g., GTEx, ENCODE, Roadmap, UKB).
              </td>
            </tr>
            <tr>
              <td>file_name</td>
              <td>Exact filename of the source dataset.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">GTEx_Analysis_2017-06-05_v8_RNASeQCv1.1.9_gene_tpm.gct.gz</td>
            </tr>
            <tr>
              <td>version</td>
              <td>Version or release of the dataset.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">v8</td>
            </tr>
            <tr>
              <td>url</td>
              <td>Web link to the source file used in the analysis. If multiple files are used, list each on a new line; other columns should remain identical.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">URL</td>
              <td class="ex">https://gtexportal.org/</td>
            </tr>
            <tr>
              <td>accession_id</td>
              <td>Accession identifier if the source file comes from the repository.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt"> string </td>
              <td class="ex">phs000424.v8.p2</td>
            </tr>
            <tr>
              <td>doi</td>
              <td> DOI for the publication containing the source file.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">DOI string</td>
              <td class="ex">10.1038/ng.2653</td>
            </tr>
            <tr>
              <td>note</td>
              <td>Extra details to aid interpretation of the source</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex"> The analysis includes only samples from individuals aged 20–29. </td>
           </tr>
          </tbody>
        </table>
      </TabItem>
      <TabItem value="biosample" label="biosample">
        <table class="peg-schema">
          <thead>
            <tr>
              <th>Field</th>
              <th>Description</th>
              <th>Mandatory</th>
              <th>Data_format / Allowed values</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tissue</td>
              <td>Primary tissue sampled (broad anatomical source).</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">pancreas</td>
            </tr>
            <tr>
              <td>sample_origin</td>
              <td>Biological origin of the sample.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">primary-tissue, organoid, cell-line, iPSC-derived, etc.</td>
              <td class="ex">primary tissue</td>
            </tr>
            <tr>
              <td>Cell_type</td>
              <td>Specific cell type, if applicable.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">alpha cells</td>
            </tr>
            <tr>
              <td>cell_line</td>
              <td>Cell line name if sample_origin = "cell-line".</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">HeLa, K562</td>
            </tr>
            <tr>
              <td>disease</td>
              <td>Disease status of the donor or sample.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">`healthy` or `disease`</td>
              <td class="ex">healthy</td>
            </tr>
            <tr>
              <td>life_stage</td>
              <td>Developmental stage of the biosample.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt"> string (e.g., fetal, adult, embryonic, iPSC)</td>
              <td class="ex">adult</td>
            </tr>
            <tr>
              <td>treatment</td>
              <td>Treatments or perturbations applied prior to or during data generation.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">anti-IgM treated</td>
            </tr>
            <tr>
              <td>sex</td>
              <td>Sex composition of samples.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">male, female, mixed</td>
              <td class="ex">mixed</td>
            </tr>
            <tr>
              <td>species</td>
              <td>Organism from which the biosample is derived (Full latin name)</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">string</td>
              <td class="ex">Homo sapiens</td>
            </tr>
            <tr>
              <td>description</td>
              <td>Brief summary of sample characteristics and intended use.</td>
              <td><span class="req req-opt">Optional</span></td>
              <td class="fmt">any</td>
              <td class="ex">Bulk pancreas tissue from healthy adult donors in GTEx v8. Used for eQTL discovery. Donors male and female, aged 20–70 years, no treatment.</td>
            </tr>
          </tbody>
        </table>
      </TabItem>
    </Tabs>
  </TabItem>

  <TabItem value="method" label="⚙️Method">
    If a `method_tag` is used for any evidence, please follow the requirements for each attribute in the method entity to provide more details. If that’s not applicable, feel free to skip this entity.
    <table class="peg-schema">
      <thead>
        <tr>
          <th>Field</th>
          <th>Description</th>
          <th>Requirement</th>
          <th>Data_format / Allowed values</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>method_tag</td>
          <td>Unique identifier for the method, used in the PEG evidence and integration metadata.</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt"> string(lowercase with underscores)</td>
          <td class="ex">soft_cadd</td>
        </tr>
        <tr>
          <td>method_mode</td>
          <td>Specifies whether the method is a published software tool or a manual approach. If <code>software</code>, provide name, version, URL, and DOI. If <code>manual</code>, describe in <code>method_description</code>.</td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">`software`, `manual`</td>
          <td class="ex">software</td>
        </tr>
        <tr>
          <td>method_mode_ontology_term_id</td>
          <td>
            <strong>For evidence:</strong><br />
            • Manual assertion (ECO:0000218)<br />
            • Automatic assertion (ECO:0000203)<br /><br />
            <strong>For integration:</strong><br />
            • Manually integrated combinatorial evidence (ECO:0007674)<br />
            • Automatically integrated combinatorial evidence (ECO:0007673)
          </td>
          <td><span class="req req-mand">Mandatory</span></td>
          <td class="fmt">string</td>
          <td class="ex">ECO_0007673</td>
        </tr>
        <tr>
          <td>software_name</td>
          <td>Name of the software used (if <code>method_mode = software</code>).</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">string</td>
          <td class="ex">CADD</td>
        </tr>
        <tr>
          <td>software_version</td>
          <td>Version of the software used.</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">string</td>
          <td class="ex">v1.6</td>
        </tr>
        <tr>
          <td>software_url</td>
          <td>Link to the official software resource.</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">URL</td>
          <td class="ex">https://cadd.gs.washington.edu/</td>
        </tr>
        <tr>
          <td>software_doi</td>
          <td>DOI of the software or associated publication.</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">DOI string</td>
          <td class="ex">10.1038/ng.2474</td>
        </tr>
        <tr>
          <td>method_description</td>
          <td>Detailed description of the method, workflow, or customisation applied.</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">string</td>
          <td class="ex">Custom scoring model combining eQTL and chromatin interaction data.</td>
        </tr>
        <tr>
          <td>note</td>
          <td>Extra details to aid interpretation of the method</td>
          <td><span class="req req-opt">Optional</span></td>
          <td class="fmt">string</td>
          <td class="ex">CADD scores were used for variant annotation. Variants with low predicted impact were filtered prior to annotation.</td>
        </tr>
      </tbody>
    </table>
  </TabItem>
</Tabs>
