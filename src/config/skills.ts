export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Software',
    skills: ['Git/GitHub', 'REST API', 'TCP/IP', 'Docker', 'Jupyter', 'Google Cloud', 'Python', 'Java', 'C++', 'C'],
  },
  {
    label: 'Hardware',
    skills: [
      'FPGA',
      'Verilog',
      'Digital Logic',
      'UART',
      'Finite State Machines',
      'Cadence Virtuoso',
      'QuestaSim',
      'Microcontrollers (Arduino and Raspberry Pi)',
      'CMOS/VLSI circuit design',
    ],
  },
  {
    label: 'AI Tools',
    skills: ['Claude Code', 'Cursor'],
  },
];
