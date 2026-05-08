(function () {
  'use strict';

  var STORAGE_KEY = 'vg_lang';
  var currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  var zh = {
    /* ── Navigation (shared across all pages) ─────────────────── */
    'nav.home':             '首页',
    'nav.about':            '关于我们',
    'nav.clients-partners': '客户与合作伙伴',
    'nav.our-clients':      '我们的客户',
    'nav.our-partners':     '我们的合作伙伴',
    'nav.products':         '产品',
    'nav.mb-options':       '宏鑫期权',
    'nav.mb-futures':       '宏鑫期货',
    'nav.news-insights':    '新闻与洞察',
    'nav.insights':         '洞察',
    'nav.news':             '新闻',
    'nav.contact':          '联系我们',
    'nav.faqs':             '常见问题',
    'nav.contact-info':     '联系信息',

    /* ── Footer ──────────────────────────────────────────────── */
    'footer.copyright': '版权所有 © 2025 宏鑫企业控股有限公司。保留所有权利。',

    /* ── Index page ──────────────────────────────────────────── */
    'index.hero.subtitle': '熊猫债券期货与期权',
    'index.hero.title':    '更智慧地<span>投资</span><span>中国债券市场</span>',
    'index.hero.desc':     '熊猫债券衍生品及全球金融策略的先驱',
    'index.hero.btn1':     '了解更多',
    'index.hero.btn2':     '我们的客户',

    'index.flip1.front':      '风险管理',
    'index.flip1.back-title': '自信地驾驭风险',
    'index.flip1.back-desc':  '利用我们的熊猫债券衍生品对冲货币、利率和信用风险。宏鑫企业的定制解决方案助您在动态市场中实现财务稳定。',
    'index.flip1.btn':        '阅读更多',
    'index.flip2.front':      '市场准入',
    'index.flip2.back-title': '无缝进入中国债券市场',
    'index.flip2.back-desc':  '简化您进入世界增长最快经济体之一的渠道。我们的工具和专业知识助跨国公司和机构投资者拓展中国金融市场。',
    'index.flip2.btn':        '阅读更多',
    'index.flip3.front':      '技术驱动的交易',
    'index.flip3.back-title': '安全高效的金融运营',
    'index.flip3.back-desc':  '体验强大的技术驱动系统，实现安全透明的熊猫债券衍生品交易。我们确保每笔交易的合规性和精确性。',
    'index.flip3.btn':        '阅读更多',

    'index.about.subtitle':    '关于宏鑫',
    'index.about.title':       '引领熊猫债券衍生品领域',
    'index.about.desc':        '宏鑫企业为全球投资者提供熊猫债券及衍生品定制解决方案。凭借风险管理、市场准入和先进交易技术方面的专业知识，我们简化了参与中国动态债券市场的过程。',
    'index.about.icon1-title': '定制策略',
    'index.about.icon1-desc':  '用于风险管理和投资组合优化的定制解决方案。',
    'index.about.icon2-title': '团队专业知识',
    'index.about.icon2-desc':  '拥有全球金融市场经验的专业团队。',
    'index.about.btn':         '了解更多',

    'index.partners.subtitle': '我们的合作伙伴',
    'index.partners.title':    '通过战略性全球合作推动创新',
    'index.partners.para1':    '我们与全球金融行业最具影响力和声望的机构建立了战略伙伴关系。这些合作使我们能够汇聚顶级机构的专业知识、资源和网络，为客户提供创新有效的解决方案。',
    'index.partners.para2':    '通过与投资银行、资产管理和衍生品交易领域的领导者密切合作，我们始终走在行业趋势的前沿。这一承诺确保我们在不断演变的市场中提供卓越的价值和适应能力。',

    'index.news.subtitle': '最新动态',
    'index.news.title':    '最新新闻与洞察',

    /* ── About page ──────────────────────────────────────────── */
    'about.page-title': '关于宏鑫企业',
    'about.breadcrumb': '关于宏鑫企业',
    'about.main-text':
      '<p>&nbsp;</p>' +
      '<p>在宏鑫企业，我们处于金融创新的前沿——专注于熊猫债券发行和衍生品。作为全球金融市场的可信伙伴，我们提供量身定制的解决方案，帮助投资者在这个快速扩张的市场中管理风险并优化回报。</p>' +
      '<p><strong>我们是谁</strong><br />建立在透明度和专业知识原则之上，我们的团队汇聚了深厚的市场洞察和前沿的金融策略。凭借在固定收益衍生品领域的成功记录，我们引导客户应对跨境投资和货币管理的复杂性。</p>' +
      '<p><strong>我们的业务</strong><br />我们的核心聚焦于熊猫债券衍生品——与外国实体在中国债券市场发行的人民币计价债券价值或表现挂钩的金融工具。我们赋予投资者对冲风险敞口、分散投资组合并简化进入世界增长最快经济体之一的渠道。</p>',
    'about.commitment':
      '<p><strong>我们的承诺</strong><br />我们致力于通过以下方式提供卓越服务：</p>' +
      '<ul>' +
      '<li><strong>全球专业知识：</strong>我们的专业人员在中国和国际金融市场均拥有丰富经验。</li>' +
      '<li><strong>定制解决方案：</strong>我们制定专属衍生品策略，与您的特定财务目标保持一致。</li>' +
      '<li><strong>道德准则：</strong>我们坚守最高诚信标准，确保完全合规和问责。</li>' +
      '</ul>',

    /* ── Contact page ────────────────────────────────────────── */
    'contact.page-title':   '联系我们',
    'contact.breadcrumb':   '联系我们',
    'contact.office-title': '办公地址',
    'contact.email-title':  '电子邮件地址',
    'contact.email-text':   '发送邮件至：<br>info@vastgoldent.com',
    'contact.info-title':   '联系信息',

    /* ── FAQs page ───────────────────────────────────────────── */
    'faqs.page-title': '常见问题',
    'faqs.breadcrumb': '常见问题',

    'faqs.q1': '1. 什么是熊猫债券？',
    'faqs.a1': '熊猫债券是由外国实体在中国国内市场发行的以人民币（CNY）计价的债券。这些债券为外国发行人提供进入中国资本市场的渠道，同时为国内投资者提供投资组合多样化的机会。熊猫债券通常由主权政府、跨国公司或金融机构发行，并受中国法规和金融法律约束。',
    'faqs.q2': '2. 为何发行熊猫债券？',
    'faqs.a2': '发行熊猫债券有三大主要优势：<br><br>• <b>以人民币融资：</b>在中国有业务的公司或政府可直接筹集人民币。<br><br>• <b>市场拓展：</b>外国实体可在中国金融市场建立业务存在。<br><br>• <b>成本效益：</b>以人民币发行债券可降低在中国运营的货币兑换风险。',
    'faqs.q3': '3. 熊猫债券的潜在投资者有哪些？',
    'faqs.a3': '熊猫债券的投资者包括中国机构投资者，如银行、保险公司和资产管理公司，以及寻求接触外国发行人的个人投资者。',
    'faqs.q4': '4. 发行熊猫债券的主要挑战是什么？',
    'faqs.a4': '通常，外国实体在发行熊猫债券时面临三大主要挑战：<br><br><b>• 合规：</b>遵守中国的监管和信息披露要求。<br><b>• 市场深度：</b>与其他国际债券市场相比，市场深度有限。<br><b>• 货币风险：</b>管理因人民币汇率波动而导致的资金汇回风险。',
    'faqs.q5': '5. 什么是熊猫债券衍生品？',
    'faqs.a5': '熊猫债券衍生品是与熊猫债券价值或表现挂钩的金融工具，熊猫债券是外国实体在中国国内市场发行的人民币计价债券。这些衍生品通常用于管理风险或进行投机。<br><br>四种常见类型：<br><br><b>1) 利率互换（IRS）：</b><br>• 帮助投资者或发行人对冲利率波动风险。<br>• 发行人可将固定利息支付换为浮动利率，以与市场条件保持一致。<br><br><b>2) 货币互换：</b><br>• 适用于以人民币筹资但负债以其他货币计价的外国发行人。<br>• 允许将人民币现金流转换为其他货币。<br><br><b>3) 信用违约互换（CDS）：</b><br>• 提供针对熊猫债券发行人违约风险的保护。<br>• 投资者使用CDS为投资保险或对发行人信用度进行投机。<br><br><b>4) 期货和期权：</b><br>• 熊猫债券期货：在未来特定日期以设定价格买卖特定熊猫债券的合约。<br>• 期权：赋予持有人在特定期限内以特定价格买卖熊猫债券的权利（但无义务）。',
    'faqs.q6': '6. 宏鑫企业提供哪些熊猫债券衍生品产品？',
    'faqs.a6': '作为熊猫债券衍生品市场的领导者，宏鑫企业提供四种衍生品产品：利率互换（IRS）、货币互换、信用违约互换（CDS）以及期货和期权。',
    'faqs.q7': '7. 如何交易宏鑫企业提供的衍生品产品？',
    'faqs.a7': '立即联系我们，开立账户。',

    /* ── Futures page ────────────────────────────────────────── */
    'futures.page-title': '宏鑫期货',
    'futures.breadcrumb': '宏鑫期货',
    'futures.subtitle':   '宏鑫企业',
    'futures.title':      '宏鑫期货',
    'futures.overview':
      '<h4><strong>概述</strong></h4>' +
      '<p>宏鑫期货旨在帮助投资者对冲货币和利率波动等风险。这些可交割合约提供灵活且流动性强的机制，以适应多样化的市场策略。</p>',
    'futures.highlights':
      '<h4><strong>合约要点</strong></h4>' +
      '<ul><li><strong>合约单位</strong>：到期面值港币100,000元</li>' +
      '<li><strong>价格报价</strong>：以点数和点数的分数表示，基于100点</li>' +
      '<li><strong>最小价格波动</strong>：<ul>' +
      '<li>直接：1/32点（0.03125）= 港币31.25元</li>' +
      '<li>日历价差：1/4的1/32点（0.0078125）= 港币7.8125元</li></ul></li>' +
      '<li><strong>交易时间</strong>：<ul>' +
      '<li><strong>香港期货交易所平台</strong>：周日至周五，晚上9:00至下午4:00（香港时间）</li></ul></li>' +
      '<li><strong>挂牌合约</strong>：季度合约（3月、6月、9月、12月），连续3个季度挂牌</li>' +
      '<li><strong>交易终止</strong>：交易于合约月份最后一个工作日前7个工作日的中午12:01终止。</li></ul>',
    'futures.settlement':
      '<h4><strong>结算与交割</strong></h4>' +
      '<ul><li><strong>结算方式</strong>：可交割</li>' +
      '<li><strong>最后交割日</strong>：交割月份的最后一个工作日</li></ul>' +
      '<h4><strong>附加特点</strong></h4>' +
      '<ul><li><strong>对冲优势</strong>：保护投资组合免受市场波动和利率风险影响。</li>' +
      '<li><strong>投机机会</strong>：利用短期市场趋势获利。</li>' +
      '<li><strong>法规合规</strong>：符合国际交易标准设计。</li></ul>',
    'futures.cta':
      '<h4><strong>准备开始了吗？</strong></h4>' +
      '<p>宏鑫企业的熊猫债券期货和期权提供参与市场的无缝方式。准备好交易或需要协助？立即联系我们的团队，踏上您的投资之旅。</p>',

    /* ── Clients page ────────────────────────────────────────── */
    'clients.page-title': '我们的客户',
    'clients.breadcrumb': '我们的客户',
    'clients.heading':    '我们的客户',
    'clients.subheading': '谁能从我们的熊猫债券相关产品和服务中受益？',
    'clients.content':
      '<p>各类金融和企业实体均可利用我们的熊猫债券衍生品进行风险管理、投资组合多样化和战略投资。</p>' +
      '<h3>1. <strong>跨国公司</strong></h3>' +
      '<p>跨国公司使用熊猫债券衍生品对冲货币风险（如人民币/美元波动）并管理利率敞口。这些工具稳定了成本和回报，尤其适用于在中国有重大业务或供应链的企业。<br><em>示例：</em>欧洲公司可使用衍生品确保人民币计价债务的可预测还款成本。</p>' +
      '<h3>2. <strong>机构投资者</strong></h3>' +
      '<p>寻求人民币计价资产敞口的资产管理公司、养老基金和保险公司可使用衍生品降低货币和久期风险，同时受益于中国的经济增长。<br><em>示例：</em>投资熊猫债券的养老基金可采用利率或跨货币互换，使回报与其他货币的负债保持一致。</p>' +
      '<h3>3. <strong>主权财富基金和中央银行</strong></h3>' +
      '<p>这些机构通过投资人民币资产实现外汇储备多样化。熊猫债券衍生品使其能够对冲货币贬值等风险，同时参与中国债券市场。<br><em>示例：</em>管理人民币敞口的中央银行可使用衍生品防范不利的汇率变动。</p>' +
      '<h3>4. <strong>全球金融机构</strong></h3>' +
      '<p>参与新兴市场债务的银行和金融机构通常使用衍生品进行自营交易、对冲或为客户提供流动性。<br><em>示例：</em>交易熊猫债券的投资银行可通过衍生品抵消价格或利率波动风险。</p>' +
      '<h3>5. <strong>私募股权和对冲基金</strong></h3>' +
      '<p>这些公司利用熊猫债券衍生品实施套利策略、投机性投资或优化风险调整后的回报。<br><em>示例：</em>押注中国利率变化的对冲基金可能使用衍生品强化其策略。</p>' +
      '<h3>6. <strong>进出口银行和贸易导向机构</strong></h3>' +
      '<p>参与跨境贸易融资的机构使用衍生品管理人民币计价交易中的利率和货币风险敞口。<br><em>示例：</em>为人民币贸易融资的进出口银行可通过衍生品稳定财务敞口。</p>' +
      '<h3>7. <strong>拥有境外业务的中国机构</strong></h3>' +
      '<p>拥有境外业务的中国企业和金融机构使用衍生品管理人民币计价债务和其他金融风险。<br><em>示例：</em>在境外筹集资金的中国国有企业可使用熊猫债券衍生品稳定其成本。</p>',

    /* ── Partners page ───────────────────────────────────────── */
    'partners.page-title': '我们的合作伙伴',
    'partners.breadcrumb': '我们的合作伙伴',
    'partners.heading':    '我们的合作伙伴',
    'partners.content':
      '<p>我们与全球金融行业最具影响力和声望的机构建立了战略伙伴关系。这些合作使我们能够汇聚顶级机构的专业知识、资源和网络，为客户提供创新有效的解决方案。</p>' +
      '<p>通过与投资银行、资产管理和衍生品交易领域的领导者密切合作，我们始终走在行业趋势的前沿。这一承诺确保我们在不断演变的市场中提供卓越的价值和适应能力。</p>',

    /* ── News page ───────────────────────────────────────────── */
    'news.page-title': '加拿大国家银行在中国大陆发行熊猫债券',
    'news.breadcrumb': '新闻',

    /* ── Insights page ───────────────────────────────────────── */
    'insights.page-title': '熊猫债券激增：增长背后的原因？',
    'insights.breadcrumb': '洞察',
  };

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (lang === 'zh') {
        if (zh[key] !== undefined) {
          if (!el.hasAttribute('data-en-html')) {
            el.setAttribute('data-en-html', el.innerHTML);
          }
          el.innerHTML = zh[key];
        }
      } else {
        if (el.hasAttribute('data-en-html')) {
          el.innerHTML = el.getAttribute('data-en-html');
        }
      }
    });

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en-US';

    document.querySelectorAll('.vg-lang-btn').forEach(function (btn) {
      btn.innerHTML = lang === 'zh'
        ? '<span class="vg-flag">🇨🇦</span><span class="vg-lang-text">EN</span>'
        : '<span class="vg-flag">🇨🇳</span><span class="vg-lang-text">中文</span>';
    });

    localStorage.setItem(STORAGE_KEY, lang);
    currentLang = lang;
  }

  function toggle() {
    applyLang(currentLang === 'zh' ? 'en' : 'zh');
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.vg-lang-btn').forEach(function (btn) {
      btn.addEventListener('click', toggle);
      btn.innerHTML = currentLang === 'zh'
        ? '<span class="vg-flag">🇨🇦</span><span class="vg-lang-text">EN</span>'
        : '<span class="vg-flag">🇨🇳</span><span class="vg-lang-text">中文</span>';
    });
    if (currentLang === 'zh') applyLang('zh');
  });
})();
