<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class Codegen extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:gen {model} {--single}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate DTO, Repository, Request and Resource files';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $model = $this->argument('model');
        $single = $this->option('single');

        if ($single) {
            $this->generateForSingle($model);

            return;
        }

        $this->generate($model);
    }

    private function generate(string $model)
    {
        Artisan::call("make:dto {$model}");
        Artisan::call("make:repository {$model}");
        Artisan::call("make:req {$model}");
        Artisan::call("make:res {$model}");
        Artisan::call("make:controller {$model}Controller --model={$model} --api");
    }

    private function generateForSingle(string $model)
    {
        Artisan::call("make:dto {$model} --single");
        Artisan::call("make:repository {$model} --single");
        Artisan::call("make:req {$model} --single");
        Artisan::call("make:res {$model}");
        Artisan::call("make:controller {$model}Controller --model={$model} --api");
    }
}
