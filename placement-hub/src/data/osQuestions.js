// src/data/osQuestions.js
// Shared question shape used across all subject pages (OS, DBMS, CN, OOPs):
// { id, question, answer, difficulty: "easy"|"medium"|"hard", category, subject, tags? }
//
// - id: stable string, never reused as array index (needed by Accordion)
// - category: must match one of the `categories` array in the page component
// - tags: optional, for future company-wise / topic-wise filtering

const osQuestions = [
  {
    id: "os-001",
    question: "What is the difference between a process and a thread?",
    answer:
      "A process is an independent program in execution with its own memory space, while a thread is a lightweight unit within a process that shares the same memory space with other threads of that process. Threads are cheaper to create and switch between since they don't require a full context switch of memory mappings.",
    difficulty: "easy",
    category: "Process",
    subject: "os",
    tags: ["process", "thread", "basics"],
  },
  {
    id: "os-002",
    question: "What are the different states of a process?",
    answer:
      "A process typically moves through five states: New (being created), Ready (waiting for CPU allocation), Running (currently executing), Waiting/Blocked (waiting for an I/O or event), and Terminated (finished execution). The OS scheduler moves processes between Ready and Running based on the scheduling algorithm.",
    difficulty: "easy",
    category: "Process",
    subject: "os",
    tags: ["process", "lifecycle"],
  },
  {
    id: "os-003",
    question: "What is a context switch and why is it expensive?",
    answer:
      "A context switch is the process of saving the state of a currently running process or thread and loading the state of another. It's expensive because it involves saving registers, program counter, and memory mappings, plus it causes cache and TLB invalidation, which leads to performance overhead even though no useful work is done during the switch itself.",
    difficulty: "medium",
    category: "Process",
    subject: "os",
    tags: ["process", "context-switch", "performance"],
  },
  {
    id: "os-004",
    question: "What is the difference between a process and a program?",
    answer:
      "A program is a passive entity — static code stored on disk. A process is an active entity — an instance of a program in execution, with its own memory, registers, and execution state. The same program can be run multiple times, creating multiple distinct processes.",
    difficulty: "easy",
    category: "Process",
    subject: "os",
    tags: ["process", "basics"],
  },
  {
    id: "os-005",
    question: "Explain FCFS, SJF, Round Robin, and Priority Scheduling.",
    answer:
      "FCFS (First Come First Served) executes processes in arrival order, simple but can cause long waiting times. SJF (Shortest Job First) picks the process with the smallest burst time, minimizing average waiting time but risking starvation of longer jobs. Round Robin gives each process a fixed time slice (quantum) in a cyclic order, ensuring fairness and good response time. Priority Scheduling executes the highest-priority process first, but can cause starvation of low-priority processes unless aging is used.",
    difficulty: "medium",
    category: "Scheduling",
    subject: "os",
    tags: ["scheduling", "algorithms"],
  },
  {
    id: "os-006",
    question: "What is the convoy effect in CPU scheduling?",
    answer:
      "The convoy effect happens in FCFS scheduling when a long process holds the CPU first, forcing all shorter processes behind it to wait — leading to poor average waiting time even if the shorter jobs could have finished quickly. It's one of the main reasons FCFS is rarely used alone in practice.",
    difficulty: "medium",
    category: "Scheduling",
    subject: "os",
    tags: ["scheduling", "fcfs"],
  },
  {
    id: "os-007",
    question: "What is the difference between preemptive and non-preemptive scheduling?",
    answer:
      "In preemptive scheduling, the OS can forcibly take the CPU away from a running process (e.g., Round Robin, Priority with preemption) to give it to another process, usually based on a timer interrupt or higher-priority arrival. In non-preemptive scheduling, once a process gets the CPU, it keeps it until it voluntarily releases it by finishing or blocking on I/O (e.g., FCFS, non-preemptive SJF).",
    difficulty: "easy",
    category: "Scheduling",
    subject: "os",
    tags: ["scheduling", "basics"],
  },
  {
    id: "os-008",
    question: "What is turnaround time, waiting time, and response time?",
    answer:
      "Turnaround time is the total time from process submission to completion. Waiting time is the total time a process spends in the ready queue waiting for the CPU. Response time is the time from submission until the first response (first time it gets the CPU), which matters most for interactive systems.",
    difficulty: "easy",
    category: "Scheduling",
    subject: "os",
    tags: ["scheduling", "metrics"],
  },
  {
    id: "os-009",
    question: "What is paging and why is it used?",
    answer:
      "Paging divides physical memory into fixed-size blocks called frames and logical memory into same-size blocks called pages. It eliminates external fragmentation (unlike contiguous allocation) and allows a process's memory to be non-contiguous in physical RAM, since a page table maps logical pages to physical frames.",
    difficulty: "medium",
    category: "Memory",
    subject: "os",
    tags: ["memory", "paging"],
  },
  {
    id: "os-010",
    question: "What is the difference between internal and external fragmentation?",
    answer:
      "Internal fragmentation occurs when allocated memory is slightly larger than requested, wasting space inside a fixed-size block (common in paging, since the last page of a process may not be fully used). External fragmentation occurs when free memory is split into small, scattered blocks that are individually too small to satisfy a request, even though total free memory is sufficient (common in contiguous/segmented allocation).",
    difficulty: "medium",
    category: "Memory",
    subject: "os",
    tags: ["memory", "fragmentation"],
  },
  {
    id: "os-011",
    question: "What is virtual memory and how does demand paging work?",
    answer:
      "Virtual memory lets a process use more memory than physically available by mapping its address space partly to RAM and partly to disk (swap space). Demand paging loads a page into memory only when it's actually accessed and causes a page fault if it isn't present, rather than loading the entire process upfront — improving memory utilization and startup time.",
    difficulty: "medium",
    category: "Memory",
    subject: "os",
    tags: ["memory", "virtual-memory", "paging"],
  },
  {
    id: "os-012",
    question: "What is thrashing in operating systems?",
    answer:
      "Thrashing occurs when a system spends more time swapping pages in and out of memory than executing actual processes, usually because too many processes are competing for too little physical memory. It severely degrades CPU utilization and is typically resolved by reducing the degree of multiprogramming or using a better page replacement policy.",
    difficulty: "hard",
    category: "Memory",
    subject: "os",
    tags: ["memory", "thrashing", "performance"],
  },
  {
    id: "os-013",
    question: "Explain page replacement algorithms: FIFO, LRU, and Optimal.",
    answer:
      "FIFO replaces the oldest loaded page regardless of usage, which is simple but can suffer from Belady's Anomaly (more frames causing more page faults). LRU (Least Recently Used) replaces the page that hasn't been used for the longest time, approximating future behavior based on the past — a good practical balance. Optimal replacement evicts the page that won't be used for the longest time in the future; it gives the best possible performance but requires future knowledge, so it's only used as a theoretical benchmark.",
    difficulty: "hard",
    category: "Memory",
    subject: "os",
    tags: ["memory", "page-replacement"],
  },
  {
    id: "os-014",
    question: "What are the four necessary conditions for deadlock?",
    answer:
      "Deadlock requires all four Coffman conditions simultaneously: Mutual Exclusion (resources can't be shared), Hold and Wait (a process holds resources while waiting for more), No Preemption (resources can't be forcibly taken back), and Circular Wait (a cycle of processes each waiting for a resource held by the next). Preventing any one of these prevents deadlock.",
    difficulty: "medium",
    category: "Deadlocks",
    subject: "os",
    tags: ["deadlock", "basics"],
  },
  {
    id: "os-015",
    question: "What is the difference between deadlock prevention, avoidance, and detection?",
    answer:
      "Prevention removes one of the four necessary conditions structurally (e.g., requiring all resources upfront to avoid hold-and-wait). Avoidance allows requests dynamically but only grants them if the system stays in a safe state, using algorithms like the Banker's Algorithm. Detection lets deadlocks happen but periodically checks for cycles in the resource allocation graph and recovers (e.g., by killing or rolling back a process) once one is found.",
    difficulty: "hard",
    category: "Deadlocks",
    subject: "os",
    tags: ["deadlock", "banker's-algorithm"],
  },
  {
    id: "os-016",
    question: "How does the Banker's Algorithm work?",
    answer:
      "The Banker's Algorithm treats resource allocation like a bank giving out loans: before granting a request, it checks whether granting it still leaves the system in a 'safe state' — meaning there exists some order in which all processes could still finish using available resources. If granting the request could lead to an unsafe state, the request is denied or delayed, even if resources are currently available.",
    difficulty: "hard",
    category: "Deadlocks",
    subject: "os",
    tags: ["deadlock", "banker's-algorithm"],
  },
];

export default osQuestions;