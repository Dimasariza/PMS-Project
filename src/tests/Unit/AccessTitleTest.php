<?php

namespace Tests\Unit;

use App\Enums\AccessTitle;
use PHPUnit\Framework\TestCase;

class AccessTitleTest extends TestCase
{
    public function test_access_title_valid(): void
    {
        $expected = [
            "shipList",
            "shipDetails",
            "jobList",
            "dataSheet",
            "stock",
            "users",
            "department",
            "inbox",
        ];

        $got = AccessTitle::toArrayColumn();

        $this->assertEquals($expected, $got);
    }
}
