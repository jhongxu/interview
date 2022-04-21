import{_ as n,c as a,o as s,d as t}from"./app.ab2b0ce5.js";const h='{"title":"\u624B\u5199\u4EE3\u7801\u5B9E\u73B0","description":"","frontmatter":{"title":"\u624B\u5199\u4EE3\u7801\u5B9E\u73B0"},"headers":[{"level":2,"title":"\u91CD\u5199reduce","slug":"\u91CD\u5199reduce"}],"relativePath":"javascript/snippets.md"}',p={},e=t(`<h1 id="array\u7BC7" tabindex="-1">Array\u7BC7 <a class="header-anchor" href="#array\u7BC7" aria-hidden="true">#</a></h1><h2 id="\u91CD\u5199reduce" tabindex="-1">\u91CD\u5199reduce <a class="header-anchor" href="#\u91CD\u5199reduce" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code>    <span class="token comment">/**
 * \u7D2F\u52A0\u5668
 * @param callback
 * @param initialValue
 * @returns {*}
 */</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">x_reduce</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> initialValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> temp
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>initialValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        i <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp <span class="token operator">=</span> <span class="token function">callback</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> temp
<span class="token punctuation">}</span>
</code></pre></div>`,3),o=[e];function c(r,l,u,i,k,d){return s(),a("div",null,o)}var m=n(p,[["render",c]]);export{h as __pageData,m as default};
