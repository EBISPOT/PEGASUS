---
sidebar_position: 4
hide_table_of_contents: true
---

# PEG List Preparation

This page provides a practical guide to prepare a PEG List for submission or sharing.
For the exact column standards, see the [PEG List Standard](../peg-list.md) and the [toy example](../peg-toy-example.md#peg-list).

:::note
Start from your final PEG Evidence Matrix and the metadata integration tab. The PEG List is derived from the matrix using the integration column marked `author_conclusion = True`.
:::

## Before you start
Make sure you have:

- A finalised PEG Evidence Matrix (all evidence and integration columns complete)
- Only **ONE** integration column flagged as the author conclusion in metadata
- The evidence category abbreviations used in the matrix (from the [controlled vocabulary](../peg-evidence.md))
- The top gene selection rule for each locus

## Recommended file format
- Use a machine-readable table - TSV file
- Do not use merged cells or styled spreadsheets
- Headers only contains the evidence category abbreviations (If it other, please use `Other_[CustomisedCategory]`)

## List structure
A PEG List is a compact table where each row represents the **top gene at a locus**.
It should include:

- A variant identifier (e.g., lead/index variant for the locus)
- The gene symbol for the author-prioritised gene
- One column per evidence category (Categories considered in the conclusion, boolean, indicating whether that category was available)
- The author conclusion integration value (copied from the matrix)

## Step-by-step preparation

### 1) Start from the Evidence Matrix
- Identify the integration column with `author_conclusion = True` in metadata
- Use that integration column to determine the top gene per locus
- If a locus has multiple top genes, include one row per gene and keep the variant identifier

### 2) Build identifier columns
- Use a consistent variant identifier (`variant_id` or rsID)
- Use HGNC gene symbols for the `Gene symbol` column
- Ensure the genome build and variant format match the matrix

### 3) Add evidence category columns
- Each evidence category abbreviation becomes a boolean column
- Use a consistent boolean encoding (e.g., `TRUE`/`FALSE`)
- Values indicate whether evidence from that category was available for the author conclusion

- Ticks do **not** imply supportive vs negative; they only mean “considered”

### 4) Add the author conclusion column
- Copy the author conclusion integration values from the matrix
- Use the same header format as the matrix, e.g., `INT_CombinedPrediction`
- Ensure the values are consistent with the matrix (same scale and encoding)

## Final checks

- Variant identifiers and gene symbols are consistent with the matrix
- Evidence category columns use approved abbreviations
- The author conclusion column matches the matrix and metadata

If you are unsure about any field or naming pattern, refer back to the [PEG List Standard](../peg-list.md) or the [PEG Evidence Matrix Preparation guide](./peg-matrix-preparation.md).
