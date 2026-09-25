export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Software',
    skills: ['Git/GitHub', 'REST API', 'Docker', 'Jupyter', 'Google Cloud', 'Python', 'Java', 'C++', 'C', 'Verilog'],
  },
  {
    label: 'Hardware',
    skills: [
      'FPGA',
      'Digital Logic',
      'UART',
      'Finite State Machines',
      'TCP/IP',
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
