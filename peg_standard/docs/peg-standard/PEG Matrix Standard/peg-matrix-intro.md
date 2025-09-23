---
sidebar_position: 1
---
# PEG Evidence Matrix Introduction

## What is the PEG Evidence Matrix?

A PEG Evidence Matrix is the complete, machine-readable table underlying PEG prioritisation.
It includes:

* **All** genes considered at **each** selected GWAS locus
* **Unfiltered** values from the relevant evidence categories (not just top-priority genes)

The matrix is designed for **pipelines**, **re-weighting**, **benchmarking**, and **cross-study comparison**.

## PEG Matrix Standards
The following standards define the minimal requirements for a PEG Matrix:

1. **ONE phenotype per PEG matrix**  
      &nbsp;&nbsp;&nbsp;&nbsp;- Each matrix corresponds to a single trait or phenotype.  

2. **ONE source GWAS per PEG matrix**  
      &nbsp;&nbsp;&nbsp;&nbsp;- Anchored to a clearly defined GWAS dataset.  

3. **ONE integrated PEG matrix**  
      &nbsp;&nbsp;&nbsp;&nbsp;- Provide a single consolidated file, not multiple fragments.  

4. **ONE plain, machine-readable format**  
      &nbsp;&nbsp;&nbsp;&nbsp;- Use tab-delimited (TSV); avoid styled or proprietary formats.  

5. **ONE rule to identify sentinel variants**  
      &nbsp;&nbsp;&nbsp;&nbsp;- Consistently define lead variants (lowest p-value SNP, fine-mapped lead).

6. **ALL genes at each locus**  
      &nbsp;&nbsp;&nbsp;&nbsp;- Include evidence for every gene, not just the top candidate.  

## PEG Matrix Suggestions (Best Practices)
In addition to the **MUST FOLLOW** standards above, the following suggestions are recommended to improve interoperability and interpretability of PEG matrices:

1. Standard identifiers <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;- Use HGNC gene symbols and include Ensembl Gene IDs for unambiguous cross-referencing.

2. Evidence summary per gene<br/>
&nbsp;&nbsp;&nbsp;&nbsp;-  Provide a cumulative “weight of evidence” score or summary statistic.

3. Avoid evidence double-counting<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- When using automated pipelines that integrate multiple evidence sources (e.g., DEPICT, Open Targets), document which sources are included.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- Do not count the same evidence type in one integration analysis twice.



## Standard Content
A PEG Evidence Matrix is composed of three major column sections. Together, these define the identifiers, raw evidence, and integrated results for each gene–locus–variant relationship.

### Information
Columns that define which variant, locus, and gene are being studied in each row. These provide the unique indexing needed to anchor all evidence values.

1. [PEG Evidence Matrix - Information](./peg-matrix.md#information)
2. Metadata Standard - Information:

### Evidence
Columns that capture the raw values from individual evidence categories. Each evidence type should be represented in a structured, machine-readable way.
1. [PEG Evidence Matrix - Evidence](./peg-matrix.md#evidence-general-pattern)
2. [Evidence Columns Example](./peg-matrix-example.md)
3. Metadata Standard - Evidence
4. Metadata Example – Evidence

### Integration
Columns that provide summaries or combined scores across multiple evidence categories.
These fields make explicit how different sources were weighted, merged, or ranked to prioritise candidate genes.
1. [PEG Evidence Matrix – Integration](./peg-matrix.md#integration-evidence-general-pattern)
2. [Integration Columns Example](./peg-matrix-example.md#integration-evidence-examples)
3. Metadata Standard – Integration
4. Metadata Example – Integration

## PEG Matrix Data Example
An example PEG Evidence Matrix is available for reference. It illustrates how the Information, Evidence, and Integration columns align in a real data.

[View PEG Matrix Data Example](../peg-one-example.md#peg-evidence-matrix)