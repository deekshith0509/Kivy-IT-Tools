import{o as s,e as n,a2 as l,d as i,a3 as m,i as p,g as o,a4 as g,B as d}from"./index-bdafdd1b.js";const h={class:"markdown-body"},u={__name:"git-memo.content",setup(c,{expose:e}){return e({frontmatter:{}}),(r,a)=>(s(),n("div",h,a[0]||(a[0]=[l(`<h2>Configuration</h2><p>Set the global config</p><pre><code class="language-shell">git config --global user.name &quot;[name]&quot;
git config --global user.email &quot;[email]&quot;
</code></pre><h2>Get started</h2><p>Create a git repository</p><pre><code class="language-shell">git init
</code></pre><p>Clone an existing git repository</p><pre><code class="language-shell">git clone [url]
</code></pre><h2>Commit</h2><p>Commit all tracked changes</p><pre><code class="language-shell">git commit -am &quot;[commit message]&quot;
</code></pre><p>Add new modifications to the last commit</p><pre><code class="language-shell">git commit --amend --no-edit
</code></pre><h2>I’ve made a mistake</h2><p>Change last commit message</p><pre><code class="language-shell">git commit --amend
</code></pre><p>Undo most recent commit and keep changes</p><pre><code class="language-shell">git reset HEAD~1
</code></pre><p>Undo the <code>N</code> most recent commit and keep changes</p><pre><code class="language-shell">git reset HEAD~N
</code></pre><p>Undo most recent commit and get rid of changes</p><pre><code class="language-shell">git reset HEAD~1 --hard
</code></pre><p>Reset branch to remote state</p><pre><code class="language-shell">git fetch origin
git reset --hard origin/[branch-name]
</code></pre><h2>Miscellaneous</h2><p>Renaming the local master branch to main</p><pre><code class="language-shell">git branch -m master main
</code></pre>`,27)])))}},_=i({__name:"git-memo",setup(c){g(t=>({"8cb22b3c":o(e).cardColor}));const e=m();return(t,r)=>(s(),n("div",null,[p(o(u))]))}});const b=d(_,[["__scopeId","data-v-c7dbeca3"]]);export{b as default};
