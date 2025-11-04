"use client";

import { useState } from 'react';
import Author from './components/Author';
import Organizations from './components/Organizations';
import ButtonWithIcon from './components/ButtonWithIcon';
import CodeBlockWithCopyBtn from './components/CodeBlockWithCopyBtn';
import styles from './page.module.css';

const repoName = 'RLAC_website';

const authors = [
  {name: "Mian Wu", superscript: "†1", link:'https://mianwu01.github.io/'},
  {name: "Gavin Zhang", superscript: "2"},
  {name: "Sewon Min", superscript: "2", link:'https://www.sewonmin.com/'},
  {name: "Sergey Levine", superscript: "2", link:'https://people.eecs.berkeley.edu/~svlevine/'},
  {name: "Aviral Kumar", superscript: "3", link:"https://aviralkumar2907.github.io/"}
]

const organizations = [
  {superscript: "1", organizations: ["Shanghai Jiao Tong University"]},
  {superscript: "2", organizations: ["University of California","Berkeley"]},
  {superscript: "3", organizations: ["Carnegie Mellon University"]}
]

const paperTitle = "RLAC: REINFORCEMENT LEARNING WITH ADVERSARIAL CRITIC FOR FREE-FORM GENERATION TASKS";

const paperDescription = "Instead of using static reward models or critics, RLAC trains a dynamic critic alongside the generator (RL policy), using an adversarial two-player game formulation. This enables verifying outputs on free-form generation tasks without needing to enumerate or identify all possible rubrics or manually engineer robust reward models";

const paperAbstract1 = `Open-ended generation tasks require outputs to satisfy diverse and often implicit
task-specific evaluation rubrics. The sheer number of relevant rubrics leads to prohibitively
high verification costs and incomplete assessments of a response, making
reinforcement learning (RL) post-training with rubric-based rewards difficult to
scale. This problem is exacerbated by the fact that often the best way to combine
these rubrics into one single reward is also highly prompt-specific. We propose
Reinforcement Learning with Adversarial Critic (RLAC), a post-training approach
that addresses these challenges via dynamic rubric verification. Our approach
employs a large language model (LLM) as a critic that dynamically identifies
only the most likely failure modes (e.g., a factual error or unhandled edge case),
which are then verified by an external validator to optimize both generator and
critic jointly. By training both the generator and the critic, this game enhances the
critic’s error detection and the generator’s output quality while reducing required
verifications. Our experiments demonstrate that RLAC improves factual accuracy
in text generation and correctness in code generation, while also outperforming
exhaustive verification and reward model methods. We show that dynamic critics
are more effective than fixed critics, showcasing the potential of RLAC for scaling
RL post-training to free-form generation tasks.`
const paperAbstract2 = `Enumerative methods verify outputs by enumerating evaluation rubrics exhaustively or approximately; reward-model approaches replace explicit verification with a pretrained model that outputs scalar rewards; and RLAC dynamically identifies and validates likely errors.`


const paperEvaluationContent1 = ` 
We perform RL training with two policy models, Qwen3-4B and Qwen3-8B. 
RLAC achieves the highest FactScore across both model sizes and generation lengths. 
These results demonstrate that RLAC scales more efficiently with increasing generation 
complexity while preserving factual accuracy.`

const paperEvaluationContent3 = `
We perform RL training with two policy models, 
Qwen2.5-Coder-7B-Base and Qwen2.5-Coder-7B-Instruct. 
RLAC achieves the highest average Pass@1 across HumanEval, 
MBPP, BigCodeBench, and LiveCodeBench benchmarks, 
outperforming both enumerative (AceCoder-Rule) and reward-model (AceCoder-RM) baselines.`
const paperEvaluationContent4 = `
We compare static and adversarial training of the critic 
to evaluate its role in guiding the generator. 
As shown in Table 3, the adversarially trained critic increases the number of 
correct facts (21.6 vs. 17.8) while keeping errors low. 
In contrast, the static critic achieves a slightly higher FactScore by reducing the 
number of generated facts, indicating over-precision rather than genuine improvement. 
These results highlight that dynamic, 
adversarial critic training is crucial, it continuously adapts to the generator’s behavior, 
preventing reward hacking and sustaining meaningful supervision.`
const paperEvaluations = [
  {title: "Performance Comparison on Factual Text Generation", text:paperEvaluationContent1, imgUrl:"/" + repoName +"/images/table1.png"},
  {title: "Performance Comparison on Code Generation", text:paperEvaluationContent3, imgUrl:"/" + repoName +"/images/table3.png"},
  {title: "Adversarial Critic Matters", text:paperEvaluationContent4, imgUrl:"/" + repoName +"/images/table2.png"},
]

const BIBTEX_TEXT = `@misc{wu2025rlacreinforcementlearningadversarial,
      title={RLAC: Reinforcement Learning with Adversarial Critic for Free-Form Generation Tasks}, 
      author={Mian Wu and Gavin Zhang and Sewon Min and Sergey Levine and Aviral Kumar},
      year={2025},
      eprint={2511.01758},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2511.01758}, 
}`;

export default function Paper() {
  const [showModal, setShowModal] = useState(false);
  
  const handleCodeClick = () => {
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <div className={styles.paperContainer}>
        <div className={styles.paperTitle}>
            <div>{paperTitle}</div>
        </div>
        <div className={styles.paperAuthors}>
          <div className={styles.peopleList}>
            {authors.map(({ name, superscript, link }) => (
              <Author key={name} name={name} superscript={superscript} link={link} />
            ))}
          </div>
          <div className={styles.organizationList}>
            {organizations.map(({ superscript, organizations }) => (
              <Organizations key={superscript} superscript={superscript} organizations={organizations} />
            ))}
          </div>
        </div>
        <div className={styles.relatedLinks}>
          <ButtonWithIcon
            text="paper"
            iconUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3.842 0a1 1 0 0 0-.922.608c-.153.369-.044.627.294 1.111l6.919 8.36l-1.023 1.106a1.04 1.04 0 0 0 .003 1.423l1.23 1.313l-5.44 6.444c-.28.3-.453.823-.297 1.199a1.025 1.025 0 0 0 .959.635a.91.91 0 0 0 .689-.34l5.783-6.126l7.49 8.005a.85.85 0 0 0 .684.26a.96.96 0 0 0 .877-.615c.158-.377-.017-.75-.306-1.14L13.73 13.9l1.064-1.13a.963.963 0 0 0 .009-1.316L4.633.464S4.26.01 3.867 0zm0 .272h.017c.218.005.487.272.564.364l.005.006l.005.005l10.17 10.99a.69.69 0 0 1-.008.946l-1.066 1.133l-1.498-1.772l-8.6-10.39c-.328-.472-.352-.619-.26-.841a.73.73 0 0 1 .671-.44Zm14.341 1.57a.88.88 0 0 0-.655.242l-5.696 6.158l1.694 1.832l5.309-6.514c.325-.433.479-.66.325-1.029a1.12 1.12 0 0 0-.977-.689m-7.655 12.282l1.318 1.414l-5.786 6.13a.65.65 0 0 1-.496.26a.75.75 0 0 1-.706-.467c-.112-.269.036-.687.244-.909l.005-.005l.005-.006z'/%3E%3C/svg%3E"
            href="https://arxiv.org/abs/2511.01758"
            target="_blank"
          />
          <ButtonWithIcon
            text="code"
            iconUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z'/%3E%3C/svg%3E"
            onClick={handleCodeClick}
            />
        </div>
        <div className={styles.paperAbstract}>
            <div>
              <div style={{fontSize: '1.5rem', fontWeight: 600}}>TL;DR</div>
              <div>
                {paperDescription}
              </div>
            </div>
            <div>Abstract</div>
            <div>{paperAbstract1}</div>
          <div className={styles.videosGrid}>
            <div className={styles.videoItem}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className={styles.video}
                preload="auto"
              >
                <source src={"/" + repoName + "/videos/A-7.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <text>Enumerative Method</text>
            </div>
            <div className={styles.videoItem}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className={styles.video}
                preload="auto"
              >
                <source src={"/" + repoName + "/videos/B-7.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <text>Reward Model</text>
            </div>
            <div className={styles.videoItem}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className={styles.video}
                preload="auto"
              >
                <source src={"/" + repoName + "/videos/C-7.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <text>RLAC(Ours)</text>
            </div>
          </div>
          <div>
            {paperAbstract2}
          </div>
        </div>
        <div className={styles.paperEvaluation}>
        <div>Evaluation</div>
        {paperEvaluations.map(({ title, text, imgUrl }) => (
          <div key={title} className={styles.evaluationSection}>
            <div className={styles.evaluationSubtitle}>
              {title}
            </div>
            <div className={styles.evaluationDescriptions}>
              {text}
            </div>
            {imgUrl && imgUrl !== "" && (
              <div className={styles.evaluationImages}>
                <img
                  src={imgUrl}
                  alt={title}
                  className={`${styles.evalImage} ${styles.evalImageSmall}`}
                />
              </div>
            )}
          </div>
        ))}
        </div>


        <div className={styles.paperReference}>
            <div>Reference</div>
            <CodeBlockWithCopyBtn code={BIBTEX_TEXT} />
        </div>

        {/* Custom Modal */}
        {showModal && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalBody}>
                <div className={styles.comingSoonText}>Coming Soon</div>
                <p>The code will be available soon. Please check back later!</p>
              </div>
              <div className={styles.modalFooter}>
                <button className={styles.modalButton} onClick={closeModal}>
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
