---
sidebar_position: 2
hide_table_of_contents: true
---
# PEG Matrix Preparation

This page provides a practical guide to prepare a PEGASUS Evidence Matrix for submission or sharing.
For the exact column standards, see the [PEG Evidence Matrix Standard](../peg-matrix.md) and the [column examples](./peg-matrix-example.md).

Need some content and examples? Start with the [PEG Evidence Matrix Introduction](./peg-matrix-intro.md) and the [toy example](../peg-toy-example.md#pegasus-evidence-matrix).

## Before you start
Make sure you have:

- A **single** trait and a **single** GWAS source for the matrix 
   → If not, consider whether your matrix should be split into multiple matrices
- The set of variants and all candidate genes related to the variants
- A list of evidence streams and any integration results you plan to report
- A decision on the author conclusion integration column (if you will produce a PEG List)

## Recommended file format
- Use a machine-readable table such as TSV
- Do not use merged cells or styled spreadsheets
- Keep headers stable and consistent with metadata
- Use a consistent missing value marker (e.g., `NA`) if possible

## Matrix structure
A PEG matrix is a flat table where each row represents a variant and its mapped gene at a locus.
This typically means:

- The `variant-gene` pair is the unique identifier
- Include all genes considered, not only top hits
- Keep variant-centric evidence columns identical for all genes at the same variant when applicable
- Keep gene-centric evidence columns identical for all variants mapped to the same gene when applicable

Minimum identifiers to include:
- `Primary Variant ID`
- `Gene ID`
- `Gene symbol`

## Step-by-step preparation

### 1) Build the identifier columns
- Add the genomic identifier columns first if chromosome, position, effect allele, and other allele are represented in multiple columns
- Use consistent gene identifiers (HGNC gene symbols, Ensembl gene IDs)
- Confirm genome build and variant format are consistent throughout

### 2) Add evidence columns (optional but recommended)
- Use the naming pattern `Category_[stream]_[detail]` where appropriate. Categories can be found in the [list](../peg-evidence.md). When no applicable category can be used, PEGASUS suggest using `Other_[CustomizedCategory]_[stream]_[detail1]_[detail2]`
- when you need multiple words in anu parts, please use CamelCase. e.g. `credible set id` -> `CredibleSetId`.
- If multiple evidence streams are used in the same category, encode the stream in the header
- If multiple value types are present in the same stream, distinguish them via `[detail]` part in the header

### 3) Add integration columns (optional but recommended)
- Use `INT_[tag]_[detail]`, where `[tag]` is what you assigned in the metadata.
- Ensure exactly **ONE** integration column is marked as the `author conclusion` in metadata
- Keep integration logic transparent and documented

### 4) Align with metadata
- Every evidence and integration column must appear in PEGASUS metadata
- Column headers must match exactly between matrix and metadata
- Record sources, methods, and biosamples in metadata to make the matrix interpretable

## Final checks

- One trait per matrix and one source GWAS per matrix
- All genes at each locus are included
- Column headers follow standard naming patterns
- Missing values are consistent and clearly defined
- Evidence and integration columns are documented in metadata

If you are unsure about any field or naming pattern, refer to the [PEG Evidence Matrix Standard](./peg-matrix.md) or the [PEGASUS Metadata Preparation guide](../peg-metadata/peg-metadata-prepare.md)