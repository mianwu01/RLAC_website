"use client";

import { useState } from 'react';
import Author from './components/Author';
import Organizations from './components/Organizations';
import ButtonWithIcon from './components/ButtonWithIcon';
import CodeBlockWithCopyBtn from './components/CodeBlockWithCopyBtn';
import styles from './page.module.css';

const repoName = 'RLAC_website';

const authors = [
  {name: "Mian Wu", superscript: "†1", link:'https://nothern-ai.github.io/'},
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
// BibTeX文本常量
const BIBTEX_TEXT = `@article{2025rlac,
  title={Reinforcement Learning with Adversarial Critic Feedback for Free-form Generations},
  author={Wu, Mian and Zhang, Gavin and Min, Sewon and Levine, Sergey and Kumar, Aviral},
  journal={arXiv preprint arXiv:},
  year={2025},
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
            iconUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ctext x='0' y='16' font-size='16'%3E%F0%9F%93%84%3C/text%3E%3C/svg%3E" 
          />
          <ButtonWithIcon
            text="code" 
            iconUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff' width='20' height='20'%3E%3Cpath d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'/%3E%3C/svg%3E"
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
