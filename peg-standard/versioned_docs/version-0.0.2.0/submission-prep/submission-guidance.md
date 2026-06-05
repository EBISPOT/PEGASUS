---
sidebar_position: 1
hide_table_of_contents: true
---

# Submission System Guide

The PEG Data Registry is available at [kpndataregistry.org/peg](https://kpndataregistry.org/peg/login?redirect=/peg/).

---

## Before You Begin

Before starting your submission, prepare the three required files and ensure your study meets the following requirements:

**Study scope**
- One PEG study covers **one trait** and **one GWAS source**.
- If your study spans multiple traits or GWAS sources, please split into separate submissions.

**Submission files** — see individual preparation guides for details:
- [PEG Evidence Matrix (TSV)](./peg-matrix-preparation.md) — all genes at each locus, all evidence values included without filtering
- [PEG Metadata (XLSX)](./peg-metadata-prepare.md) — completed using the submission template
- [PEG List (TSV)](./peg-list-preparation.md) — one top-priority gene per locus, single integration conclusion per row

---

## Step 1: Create an Account

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/2_landing_page.png').default} style={{width: '48%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <p>Go to the <a href="https://kpndataregistry.org/peg/login?redirect=/peg/"><strong>PEG Data Registry</strong></a>.</p>
    <ol>
      <li>The welcome panel summarises the files you need before submitting.</li>
      <li>If you already have an account, enter your credentials and click <strong>Sign In</strong>.</li>
      <li>If you are new, click <strong>Create one</strong> at the bottom to register.</li>
    </ol>
  </div>
</div>

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/1_create_account.png').default} style={{width: '48%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <p>On the <strong>Create a PEG account</strong> page:</p>
    <ol>
      <li>Enter your <strong>email address</strong>.</li>
      <li>Choose a <strong>password</strong> and confirm it.</li>
      <li>Click <strong>Create account</strong>.</li>
    </ol>
  </div>
</div>

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/3_success_create_account.png').default} style={{width: '48%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <ol>
      <li>A confirmation message will appear showing your registered email address.</li>
      <li>Click <strong>Go to sign in</strong> to proceed to the login page.</li>
    </ol>
  </div>
</div>

---

## Step 2: Sign In

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/4_log_in_page.png').default} style={{width: '48%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <ol>
      <li>Enter your <strong>email</strong> and <strong>password</strong>.</li>
      <li>Click <strong>Sign In</strong>.</li>
    </ol>
  </div>
</div>

---

## Step 3: Start a New Study

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/5_home_page.png').default} style={{width: '55%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <p>The <strong>PEG Studies</strong> dashboard lists all your submissions.</p>
    <ol>
      <li>Click <strong>Create New Study</strong> in the top-right corner.</li>
      <li>Alternatively, click <strong>Create Your First Study</strong> if this is your first submission.</li>
    </ol>
  </div>
</div>

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/6_check_list.png').default} style={{width: '55%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <p>Review the <strong>Before You Begin</strong> checklist.</p>
    <ol>
      <li>Confirm your study covers one trait and one GWAS source.</li>
      <li>Confirm you have all three files ready. If you are unsure about the expected format or content of each file, see the <a href="./peg-matrix-preparation">file preparation guides</a>.</li>
      <li>Click <strong>Continue to Metadata</strong> when ready.</li>
    </ol>
  </div>
</div>

---

## Step 4: Enter Study Metadata

### Study Information & Phenotype

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/7_enter_metadata.png').default} style={{width: '55%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <ol>
      <li><strong>Study Name</strong> — the title of your manuscript, paper, or study (e.g., <code>Aragam2021_CAD</code>).</li>
      <li><strong>Study Author</strong> — the first author's name or the submitter's name.</li>
      <li><strong>Phenotype</strong> — a MONDO ID is preferred; free-text is also accepted (see below).</li>
      <li>Select the <strong>PEG Source</strong> publication status (Published / Pre-published / Unpublished).</li>
      <li>Select the <strong>GWAS Source</strong> from the available options.</li>
    </ol>
  </div>
</div>

### Phenotype Input

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/8_study_info_pheno.png').default} style={{width: '55%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <p>The phenotype field supports two input modes:</p>
    <ol>
      <li><strong>MONDO ID</strong> (preferred) — type a MONDO identifier (e.g., <code>MONDO:0005267</code>). Using a standardised ontology term enables your data to be linked with ClinGen and other clinical resources.</li>
      <li><strong>Free-text search</strong> — type a trait name and select a term from the dropdown list. A free-text entry is also accepted if no suitable term is available.</li>
    </ol>
  </div>
</div>

---

### PEG Source

The PEG source is the **primary** source — the publication or manuscript that **reports your PEG data**.

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/10_PEG_source.png').default} style={{width: '55%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <p>Select the publication status and provide the corresponding identifier:</p>
    <ol>
      <li><strong>Published</strong> — enter the PubMed ID (PMID) of the published paper.</li>
      <li><strong>Pre-published</strong> — enter the DOI of the pre-print.</li>
      <li><strong>Unpublished</strong> — enter a manuscript title or brief description.</li>
    </ol>
  </div>
</div>

---

### GWAS Source

The GWAS source is the GWAS dataset that **drove your PEG analysis**. Use the highest-priority option that applies.

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/11_GWAS_source.png').default} style={{width: '55%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <p><strong>Preferred (use the first that applies):</strong></p>
    <ol>
      <li><strong>GWAS Catalog ID</strong> — enter the <code>GCST</code> accession (e.g., <code>GCST90010729</code>), available at <a href="https://www.ebi.ac.uk/gwas">ebi.ac.uk/gwas</a>. This is the preferred option as it enables cross-resource discoverability.</li>
      <li><strong>Knowledge Portal</strong> — enter the dataset ID if the GWAS data is hosted in the Knowledge Portal.</li>
      <li><strong>Same as PEG source</strong> — select this if the GWAS summary statistics are from the same publication as the PEG data.</li>
    </ol>
    <p><strong>If none of the above are available:</strong></p>
    <ol start={4}>
      <li><strong>Published (PMID)</strong> — enter the PubMed ID of the paper containing the GWAS data.</li>
      <li><strong>Pre-published (DOI)</strong> — enter the DOI of the pre-print.</li>
      <li><strong>Unpublished</strong> — enter a brief description of the GWAS data source.</li>
    </ol>
  </div>
</div>

---

## Step 5: Upload Files

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/12_file_upload.png').default} style={{width: '55%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <p>Upload all three required files in PEGASUS format:</p>
    <ol>
      <li>Click <strong>Choose PEG List File</strong> and select your TSV file.</li>
      <li>Click <strong>Choose PEG Metadata File</strong> and select your XLSX file.</li>
      <li>Click <strong>Choose PEG Matrix File</strong> and select your TSV file.</li>
    </ol>
  </div>
</div>

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/13_file_upload_success.png').default} style={{width: '55%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <ol>
      <li>Once all files are selected, their names and sizes will appear below each upload button.</li>
      <li>Click <strong>Submit Study</strong> to complete the submission.</li>
    </ol>
  </div>
</div>

---

## Step 6: View Your Submission

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/14_view_dataset.png').default} style={{width: '55%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <ol>
      <li>After submission, your study appears in the <strong>PEG Studies</strong> dashboard with a unique accession ID (e.g., <code>PEGSt00004</code>).</li>
      <li>The table shows the Study Name, Accession ID, Author, Phenotype, and creation date.</li>
      <li>Click the study name to view the full submission details.</li>
    </ol>
  </div>
</div>

<div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
  <img src={require('../img/submission_guide/15_submission_details.png').default} style={{width: '55%', flexShrink: 0, borderRadius: '8px', border: '1px solid #e0e0e0'}} />
  <div>
    <ol>
      <li>The <strong>Study Information</strong> panel shows the study name, accession ID, author, and submission date.</li>
      <li>The <strong>Uploaded Files</strong> table lists each file with its name, upload timestamp, and size.</li>
      <li>Click the download icon next to any file to retrieve it.</li>
    </ol>
  </div>
</div>
