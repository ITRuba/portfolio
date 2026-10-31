import WafeerPreview from './WafeerPreview';
import AfiahPreview from './AfiahPreview';
import AgentWorkflow from './AgentWorkflow';
import ParkoPreview from './ParkoPreview';

// Maps a project id to its interactive preview (shared by ProjectCard and CaseStudyPage).
export const projectPreviews = {
  wafeer: WafeerPreview,
  afiah: AfiahPreview,
  'ai-agent': AgentWorkflow,
  parko: ParkoPreview,
};
