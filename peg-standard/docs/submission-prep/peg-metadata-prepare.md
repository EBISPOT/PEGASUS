---
sidebar_position: 3
hide_table_of_contents: true
---

# PEG Metadata Preparation
💡 To make data submission easier, we provide an Excel template with six tabs (one per entity type), specifically designed to help submitters capture the relevant fields efficiently.

:::tip
[📊 Download metadata google sheet template](https://docs.google.com/spreadsheets/d/1-qn2jM3Ptk-qdvotQkRAQZQ2tRHV7cvg2j6KFLrf5nM/edit?gid=0#gid=0)
:::

If you have questions about any attribute for each entity, we also provide detailed explanations [here](../peg-metadata/peg-metadata.md). We are more than happy to hear from you — please feel free to contact us if you have further questions.

The PEG metadata is currently organised into six tabs. The diagram below shows a simplified view of their relationships.

Each entity contains fields that capture a different aspect of the dataset:

- [**Dataset description**](../peg-metadata/peg-metadata.md?peg-metadata-tab=dataset-description) - descriptors for the whole PEG matrix (trait, source of the matrix itself, publication reference, release date, creator)
- [**Genomic Identifier**](../peg-metadata/peg-metadata.md?peg-metadata-tab=genomic-identifier) – details about the variants, genes, or locus included in your dataset.
- [**Evidence**](../peg-metadata/peg-metadata.md?peg-metadata-tab=evidence) – supporting data types and experimental or computational evidence that link variants to genes or traits.
- [**Integration**](../peg-metadata/peg-metadata.md?peg-metadata-tab=integration) – information about how different streams of evidence are combined (e.g., scoring, weighting, prioritisation).
- [**Source**](../peg-metadata/peg-metadata.md?peg-metadata-tab=source) – citation and provenance information for each evidence stream, including publications, databases, and biosample details.
- [**Method**](../peg-metadata/peg-metadata.md?peg-metadata-tab=method) – a description of the methodology, pipelines, or softwares used to generate the data.

## How to fill the metadata template

Below is a practical, step-by-step guide to help you complete the Excel/Google Sheet metadata template. The fields are explained in detail on the [Metadata Standard page](../peg-metadata/peg-metadata.md), but the guidance here focuses on what to fill and when.

### 1) Prepare your inputs
Before you start filling the sheet, make sure you have:

- The final PEG evidence matrix you plan to submit (all columns finalized)
- The GWAS source and trait details
- A list of evidence column names
- A list of integration column names (if any), including which evidence they combine
- A list of sources (databases, files, publications) and methods (software or manual pipelines) used to generate evidence/integration

### 2) Fill tabs in a logical order
We recommend filling the tabs in the following order so that your `source_tag` and `method_tag` to avoid repeats:

1. Dataset description
2. Genomic Identifier
3. Evidence
4. Integration
5. Source
6. Method


## Tab-by-tab guidance

### Dataset description (required)
Describe the trait, GWAS source, and overall PEG dataset context.

- `trait_description` is mandatory and should be clear to a non-specialist.
- `gwas_source` should be a GWAS Catalog accession (GCST) if possible.
- If `gwas_source` is not GCST, fill in `gwas_sample_description`, `gwas_sample_size`, and `gwas_sample_ancestry`.

### Genomic Identifier (required)
Explain how variants, genes, and loci were defined.

- `genome_build` is mandatory (e.g., GRCh38).
- Include `variant_type` (lead/index/sentinel/mixed), and how loci are defined.
- If you use a specific gene ID version (Ensembl, HGNC), record it here.

### Evidence (required)
This is the core tab. Each row represents one evidence column in your PEG matrix.

- `column_header` must exactly match the evidence column name in your matrix.
- `column_description` explain the data content and how to interperate the data
- `evidence_category`, `evidence_category_abbreviation` must come from the [controlled list](../peg-evidence.md).
- `variant_or_gene_centric` is important for `Other_[CustomisedCategory]_(stream)_[details]`.
- `evidence_stream_tag` identifies the specific analysis stream within an evidence category. It repeats the stream defined in the `Category_(stream)_[details]` column header.
- `source_tag` and `method_tag` are optional but highly recommended, as they provide additional detail in the **Source** and **Method** tabs and help others better understand and reuse your data.
- Add `threshold` and `note` if the values require interpretation.

### Integration (required if you have integrated results)
Each row describes one integration output column in the PEG matrix.

- `integration_tag` is a short identifier for the integration method.
- `column_header` should follow the format `INT_[integration_tag]_[details]`.
- `method_tag` is mandatory and must point to the method used for integration.
- Use `evidence_streams_included` (pipe-delimited) to show which streams were combined.
- Use `integrations_included` (pipe-delimited) to show which integrated analysis also included.
- Only one row in the integration tab can have `author_conclusion = True` (this defines the PEG list).

### Source (recommended)
Record the origin of each evidence stream. One row = one source definition.

- `source_tag` must be unique and is referenced in Evidence/Integration tabs.
- If multiple files belong to the same source, duplicate the row and update only `file_name` / `url`.
- Use the biosample section if tissue/cell type is relevant to that source.

### Method (recommended)
Describe how each evidence stream or integration was produced.

- `method_tag` must be unique and referenced later.
- `method_mode` and `method_mode_ontology_term_id` are required (They are prepared by the drop down).
- If `method_mode = software`, include name/version/URL.
- If `method_mode = manual`, describe the process in `method_description`.


## Final checks before submission

- All `column_header` values match the evidence/integration columns in your PEG matrix.
- `source_tag` and `method_tag` values are unique and used consistently.
- Evidence categories and abbreviations match the controlled list.
- Only one integration column is marked `author_conclusion = True`.
- All mandatory fields are filled.

If you are unsure about any field, refer back to the [PEGASUS Metadata Standard](../peg-metadata/peg-metadata.md) or contact us.
