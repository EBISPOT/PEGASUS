---
sidebar_position: 1
---
# 📖 PEGASUS Evidence Matrix Introduction

## What is the PEGASUS Evidence Matrix?

A PEGASUS Evidence Matrix is the complete, machine-readable table underlying PEG prioritisation.
It includes:

* **All** genes considered at **each** selected GWAS locus
* **Unfiltered** values from the relevant evidence categories (not just top-priority genes)

The matrix is designed for **pipelines**, **re-weighting**, **benchmarking**, and **cross-study comparison**.

## PEGASUS Evidence Matrix Requirements
The following standards define the minimal requirements for a PEG Matrix:

1. **ONE trait per PEG matrix**  
      &nbsp;&nbsp;&nbsp;&nbsp;- Each matrix corresponds to a single trait or phenotype.  

2. **ONE source GWAS per PEG matrix**  
      &nbsp;&nbsp;&nbsp;&nbsp;- Anchored to a clearly defined GWAS dataset - single cohort GWAS or meta-analysis (ideally identified by GWAS Catalog accession ID).
 

3. **ONE PEG matrix**  
      &nbsp;&nbsp;&nbsp;&nbsp;- Provided in a **machine-readable** format (e.g. tab-delimited (TSV); avoid styled or proprietary formats).  

4. **ALL genes at each locus**  
      &nbsp;&nbsp;&nbsp;&nbsp;- Include evidence for every gene considered, not just the top candidate(s).

## PEGASUS Evidence Matrix Suggestions (Best Practices)
In addition to the **MUST FOLLOW** standards above, the following suggestions are recommended to improve interoperability and interpretability of PEG matrices:

1. Evidence summary per gene (author’s conclusion)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;-  Provide a cumulative weight-of-evidence score or a qualitative conclusion. This column is mandatory and must be labelled as `author_conclusion=True` in the metadata. It acts as the primary key linking the PEG matrix and the PEG list.

2. Standard identifiers<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- Use HGNC gene symbols and include Ensembl Gene IDs for unambiguous cross-referencing.

3. Avoid evidence double-counting<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- When using automated pipelines that integrate multiple evidence sources (e.g., DEPICT, Open Targets), document which sources are included.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- Do not count the same evidence type in one integration analysis twice.
___

## PEGASUS Evidence Matrix Overview

The PEGASUS Evidence Matrix brings together information on genetic **variants**, **locus**, and **genes**, alongside the **multiple streams of evidence** that connect them. It also includes **integrative analyses** that based on multiple evidence, as well as **a column for conclusions drawn**. The structure is designed to make relationships between entities clear and to enable side-by-side comparison of evidence from different sources.

- Variant – Identifies the variant(s) under consideration.
- Locus – Groups variants into locus to provide genomic context.
- Gene – Lists all candidate genes at a locus that are assessed with supporting evidence.
- Evidence – Captures both variant-centric and gene-centric evidence. Evidence is organised into category-specific fields, enabling systematic comparison across genes and loci.
- Integration – Records integrative scores, assertions, or conclusions, combining multiple evidence types into higher-level interpretations.

Together, these components provide a structured and transparent framework for linking genetic signals to potential effector genes, while ensuring the underlying evidence remains visible, comparable, and reproducible.

![PEG Evidence Matrix demo](../img/peg-matrix-demo.png)

## PEGASUS Evidence Matrix Standard Content

A PEG Evidence Matrix is composed of three major column sections. Together, these define the identifiers, raw evidence, and integrated results for each gene–locus–variant relationship. Each section is described below together with links to the detailed matrix column headers and associated metadata. 


### Genomic Identifiers
Columns that define which variant, locus, and gene are being studied in each row. These provide the unique indexing needed to anchor all evidence values.

1. [PEG Evidence Matrix Standard](./peg-matrix.md#genomic-identifiers)
2. [PEG Metadata Standard](../peg-metadata/peg-metadata.md?peg-metadata-tab=genomic-identifier)

### Evidence
Columns that capture the values from individual evidence categories. Each evidence type should be represented in a structured, machine-readable way.
1. [PEG Evidence Matrix Standard](./peg-matrix.md#evidence--general-pattern)
2. [Evidence Columns Example](./peg-matrix-example.md?matrix-example-tab=variant)
3. [PEG Metadata Standard](../peg-metadata/peg-metadata.md?peg-metadata-tab=evidence)
4. [Evidence Metadata Example (Excel format) - for data submitters](../peg-toy-example.md?toy-data-tab=evidence#pegasus-metadata-in-tabular-format-suitable-for-submission)
5. [Evidence Metadata Example (YAML format) - for metadata users](../peg-toy-example.md#pegasus-metadata-in-yaml-suitable-for-reader)

### Integration
Columns that provide summaries or combined scores across multiple evidence categories.
These fields make explicit how different sources were weighted, merged, or ranked to prioritise candidate genes.
1. [PEG Evidence Matrix – Integration](./peg-matrix.md#integration-evidence--general-pattern)
2. [Integration Columns Example](./peg-matrix-example.md?matrix-example-tab=integration)
3. [PEG Metadata Standard](../peg-metadata/peg-metadata.md?peg-metadata-tab=integration)
4. [Integration Metadata Example (Excel format) - for data submitters](../peg-toy-example.md?toy-data-tab=integration#pegasus-metadata-in-tabular-format-suitable-for-submission)
5. [Integration Metadata Example (YAML format) - for metadata users](../peg-toy-example.md#pegasus-metadata-in-yaml-suitable-for-reader)

---
* 🎠 [View PEG Matrix Toy Example](../peg-toy-example.md#pegasus-evidence-matrix)
